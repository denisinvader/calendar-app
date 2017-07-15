const React = require('react');
const moment = require('moment');

function MonthSelect (props) {
  const {
    locale,
    month,
    year,
    onChange
  } = props;
  moment.locale(locale);
  const d = moment();
  d.year(year);
  d.month(month);

  const changeMonth = (path) => () => {
    var newDate = moment();
    newDate.year(year);

    if (path === 'prev')
      newDate.month(month - 1);
    else
      newDate.month(month + 1);

    onChange({
      year: newDate.year(),
      month: newDate.month()
    });
  };

  return (
    <div>
      <button onClick={changeMonth('prev')}>&lt;</button>
      <span>{ d.format('MMM, YYYY') }</span>
      <button onClick={changeMonth('next')}>&gt;</button>
    </div>
  );
}

module.exports = MonthSelect;
