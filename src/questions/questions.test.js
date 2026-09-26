import evaluateCode, {formatEval} from '../utils/evaluateCode';
import sectionsList from '../sectionsList';

// App.js only uses string solutions; any other hardcoded solution must match what the code logs
it('hardcoded solutions match the evaluated code', () => {
  sectionsList.forEach(section => section.subsections.forEach(sub => sub.questions.forEach(q => {
    if (!('solution' in q) || typeof q.solution === 'string') return;
    expect({code: q.code, solution: evaluateCode(q.code)})
      .toEqual({code: q.code, solution: formatEval(q.solution)});
  })));
});
