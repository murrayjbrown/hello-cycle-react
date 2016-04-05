//
// cycler-timer-react.js
//  - demonstrates simple Cycle.js framework with React + react-hyperscript
//    depicting the separation of logic (functional) from effects (imperative)
//
const Cycle = require('cycle-react');
const React = require('react');
const ReactDOM = require('react-dom');
const Rx = require('rx');

// "component" returns native react class which can be used normally
// by "React.createElement".
const Timer = Cycle.component('Timer', function () {
  return Rx.Observable.interval(1000).map(i => <p>Seconds Elapsed: {i}</p>);
});

ReactDOM.render(
  React.createElement(Timer),
  document.querySelector('#cycle-timer-react-app-container')
);
