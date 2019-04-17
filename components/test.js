import React from "../react/build/react.js";
import ReactDOM from "../react/build/react-dom.js";
import counter from 'counter.js'

//"use strict";

var element = React.createElement(
  "h1",
  null,
  "Hello World"
);
//root is inside html file in div defined as id, defines space to render children
//ReactDOM.render(counter, document.getElementById("root"));
ReactDOM.render(element, document.getElementById("root"));


// return <div><h1>Hello World</h1><button>Increment</button></div>
// ...same as....
// React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'h1',
//     null,
//     "Hello World"),
//   React.createElement(
//     'button',
//     null,
//     "Increment")
// );
//
//Instead of using div you can use React.fragment, not sure of benefits of this
