import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import HelloWorld from './HelloWorld';
import IntroToJSX from './IntroToJSX';
import EmbedingExpresion from './EmbedingExpresion';
import FormattingUser from './FormattingUser';
import ConditionalExpression from './ConditionalExpression';
import Welcome from './Welcome'
import WelcomeClass from './WelcomeClass'
import ComposingComponents from './ComposingComponents';
import reportWebVitals from './reportWebVitals';
import Card from './Card';

const element = <h1>Hello, world</h1>;
const element_component = <Welcome name={'priyadharshini balaji'} />

ReactDOM.render(
  //passing elements straightly
  // <h1>Hello World from Index.js!</h1>,

  // passing elements using a constant
  // element,

  //passing elements enclosed in a default parent
  <React.StrictMode>
    <Card />
    <Card />
  </React.StrictMode>,

  //element can also have component passesd
  // element_component,
  document.getElementById('root')
);


// tick function
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// tick()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
