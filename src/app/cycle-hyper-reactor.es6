//
// cycler-timer-hyper-react.js
//  - demonstrates simple Cycle.js framework with React + react-hyperscript.
//
const Cycle = require('cycle-react');
const React = require('react');
const ReactDOM = require('react-dom');
var h = require('react-hyperscript');

const cycleHyperReactor = Cycle.component('Hello', function computer(interactions) {
  return interactions.get('OnNameChanged')
    .map(ev => ev.target.value)
    .startWith('')
    .map(name =>
        h('div', [
            h('label', 'Your name:'),
            h('input', {type:'text', onChange:interactions.listener('OnNameChanged')}),
            h('h3', 'Hello ' + name)
        ])
    );
});

ReactDOM.render(
  h(cycleHyperReactor),
  document.querySelector('#cycle-timer-hyper-react-app-container')
);
