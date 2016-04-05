//
// cycle-timer-hyper-react.js
//  - demonstrates simple Cycle.js framework with React + react-hyperscript
//    depicting the separation of logic (functional) from effects (imperative)
//
import Cycle from 'cycle-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rx';
import h from 'react-hyperscript';

// "component" returns native react class which can be used normally
// by "React.createElement".
const Timer = Cycle.component('Timer', function () {
  return Rx.Observable.interval(1000).map(i => h('p', 'Seconds Elapsed: '  + i));
});

ReactDOM.render(
  React.createElement(Timer),
  document.querySelector('#cycle-timer-hyper-react-app-container')
);
