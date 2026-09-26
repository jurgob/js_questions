// Checks every tutorial link in src/questions (and the header link in App.js).
// Usage: node scripts/check-links.js   (exits 1 if any link is broken)
const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')

function collectLinks() {
  const links = []
  const root = path.join(__dirname, '../src/questions')
  fs.readdirSync(root).sort().forEach(dir => {
    const full = path.join(root, dir)
    if (!fs.statSync(full).isDirectory()) return
    fs.readdirSync(full).sort().forEach(file => {
      const src = fs.readFileSync(path.join(full, file), 'utf8')
      const link = src.match(/tutorial_link\s*:\s*"([^"]+)"/)
      if (!link) return
      const label = src.match(/label\s*:\s*(?:"((?:[^"\\]|\\.)*)"|`([^`]*)`)/)
      const name = label ? (label[1] || label[2]).replace(/\\"/g, '"') : file
      links.push({section: `${dir} / ${name}`, url: link[1]})
    })
  })
  const app = fs.readFileSync(path.join(__dirname, '../src/App.js'), 'utf8')
  const header = app.match(/href="(https?:\/\/xahlee[^"]+)"/)
  if (header) links.push({section: 'header', url: header[1]})
  return links
}

function get(url, redirects = 0) {
  return new Promise(resolve => {
    const lib = url.startsWith('https') ? https : http
    const req = lib.get(url, {headers: {'User-Agent': 'jsquest-link-check'}, timeout: 20000}, res => {
      const {statusCode, headers} = res
      if (statusCode >= 300 && statusCode < 400 && headers.location && redirects < 10) {
        res.resume()
        return resolve(get(new URL(headers.location, url).href, redirects + 1))
      }
      let body = ''
      res.setEncoding('utf8')
      res.on('data', chunk => { body += chunk })
      res.on('end', () => resolve({status: statusCode, finalUrl: url, body}))
    })
    req.on('timeout', () => req.destroy(new Error('timeout')))
    req.on('error', err => resolve({status: 0, finalUrl: url, body: '', error: err.message}))
  })
}

const title = body => ((body.match(/<title>([^<]*)<\/title>/i) || [])[1] || '').trim()

async function main() {
  let broken = 0
  for (const {section, url} of collectLinks()) {
    const res = await get(url)
    // xahlee.info redirects missing pages to /404error.html, which answers 200
    const ok = res.status === 200 && !/404error/.test(res.finalUrl)
    if (!ok) broken++
    const moved = res.finalUrl !== url ? ` -> ${res.finalUrl}` : ''
    console.log(`${ok ? 'OK  ' : 'FAIL'} ${res.status || res.error} | ${section} | ${url}${moved} | ${title(res.body)}`)
  }
  console.log(`\n${broken} broken link(s)`)
  process.exitCode = broken ? 1 : 0
}

main()
