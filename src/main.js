const React = require('react');
const { render } = require('react-dom');
const App = require('./App');

require('./styles/main.scss');

render(
  <App />,
  document.getElementById('app')
);
