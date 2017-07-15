const React = require('react');

const Month = require('./Month');

class App extends React.Component {
  constructor (props) {
    super(props);

    var date = new Date();

    this.state = {
      locale: 'ru',
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

  render () {
    return (
      <div>
        <Month month={this.state.month}
               year={this.state.year}
               locale={this.state.locale} />
      </div>
    );
  }
}

module.exports = App;
