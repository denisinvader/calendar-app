const React = require('react');
const { render } = require('react-dom');
const App = require('./components/App');

require('./styles/main.scss');

render(
  <App />,
  document.getElementById('app')
);
