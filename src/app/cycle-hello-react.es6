//
// cycler-hello-react.js
//  - demonstrates simple Cycle.js framework with React UI components.
//
const Cycle = require('cycle-react');
const React = require('react');
const ReactDOM = require('react-dom');

const CycleReactor = Cycle.component('Hello', function computer(interactions) {
  return interactions.get('OnNameChanged')
    .map(ev => ev.target.value)
    .startWith('')
    .map(name =>
      <div>
        <label>Enter name:</label>
        <input type="text" onChange={interactions.listener('OnNameChanged')} />
        <h3>Hello {name}</h3>
      </div>
    );
});

ReactDOM.render(
  <CycleReactor />,
  document.querySelector('#cycle-hello-react-app-container')
);
