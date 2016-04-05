//
// cycle-timer.js
//  - demonstrates simple Cycle.js framework with React + react-hyperscript
//    depicting the separation of logic (functional) from effects (imperative)
//
import Cycle from '@cycle/core';
import Rx from 'rx';

//
// App Logic (functional)
//
function main () {
    return {
        DOM: Rx.Observable.timer(0, 1000)
          .map(i => 'Seconds elapsed ' + i),
        Log: Rx.Observable.timer(0, 1000)
          .map(i => 2*i)
    };
}

//
// Drivers: Effects (imperative)
//
function DOMEffect(text$) {
    text$.subscribe(text => {
        const container = document.querySelector('#cycle-timer-app-container');
        container.textContent = text;
    });
}

function consoleLogEffect(msg$) {
    msg$.subscribe(msg => console.log(msg));
}

//
// Connect sinks
//
const sinks = main();
DOMEffect(sinks.DOM);
consoleLogEffect(sinks.Log);
