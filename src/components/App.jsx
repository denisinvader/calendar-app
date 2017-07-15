const React = require('react');

const Month = require('./Month');
const MonthSelect = require('./MonthSelect');

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

  monthChange = ({ month, year }) => {
    this.setState({
      month,
      year
    })
  }

  render () {
    return (
      <div>
        <MonthSelect month={this.state.month}
                     year={this.state.year}
                     locale={this.state.locale}
                     onChange={this.monthChange} />
        <Month month={this.state.month}
               year={this.state.year}
               locale={this.state.locale} />
      </div>
    );
  }
}

module.exports = App;
