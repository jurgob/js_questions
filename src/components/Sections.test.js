import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';
import {SectionsRoutes} from './Sections';

jest.mock('react-ga');

// jsdom has no layout, so container queries never match; pretend a screen size
let mockContainerQuery = {};
jest.mock('react-container-query', () => ({
  applyContainerQuery: (Comp) => (props) => <Comp containerQuery={mockContainerQuery} {...props} />,
}));

const sections = [
  {
    title: 'Basics',
    subsections: [
      {label: 'First', link: '/sections/first', questions: [{id: 'q1', code: 'log(1)', solution: '1'}]},
      {label: 'Second', link: '/sections/second', questions: [{id: 'q2', code: 'log(2)', solution: '2'}]},
    ],
  },
];

function render(path, containerQuery) {
  mockContainerQuery = containerQuery;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    <MemoryRouter initialEntries={[path]}>
      <SectionsRoutes sections={sections} setResponse={() => {}} containerQuery={containerQuery} />
    </MemoryRouter>,
    div
  );
  return div;
}

afterEach(() => {
  document.body.innerHTML = '';
});

it('shows the start button on the home page', () => {
  const div = render('/', {large: true});
  expect(div.textContent).toContain('Start Test');
});

it('shows the section matching the url, with a link to the next one', () => {
  const div = render('/sections/first', {large: true});
  expect(div.textContent).toContain('First');
  expect(div.textContent).not.toContain('Start Test');
  expect(div.querySelector('a.LinkButton').getAttribute('href')).toBe('/sections/second');
});

it('shows the current section in the mobile navigation on small screens', () => {
  const div = render('/sections/second', {xsmall: true});
  const toggle = div.querySelector('.NavMobile-toggle');
  expect(div.querySelectorAll('.NavMobile').length).toBe(1);
  expect(toggle.textContent).toContain('Basics');
  expect(toggle.textContent).toContain('Second');
  expect(div.querySelector('.NavMobile-panel')).toBe(null);
});

it('navigates when a section is picked in the mobile navigation', () => {
  const div = render('/sections/first', {xsmall: true});
  ReactTestUtils.Simulate.click(div.querySelector('.NavMobile-toggle'));
  const items = div.querySelectorAll('.NavMobile-item');
  expect(items.length).toBe(2);
  expect(items[0].className).toContain('is-active');
  ReactTestUtils.Simulate.click(items[1]);
  expect(div.querySelector('.NavMobile-panel')).toBe(null);
  expect(div.querySelector('.NavMobile-toggle').textContent).toContain('Second');
  expect(div.querySelector('a.LinkButton')).toBe(null);
});

it('redirects old /sections/sections/... links to the section', () => {
  const div = render('/sections/sections/second', {xsmall: true});
  expect(div.querySelector('.NavMobile-toggle').textContent).toContain('Second');
  expect(div.querySelector('.QuestionSection, section').textContent).toContain('Second');
});
