const React = require('react');
const moment = require('moment');

function Calendar ({ month, year, locale }) {
  moment.locale(locale);

  var d = moment();
  d.year(year);
  d.month(month);
  d.date(1);

  var weekDays = [];
  var calendar = {};
  for (let i = 0; i < 7; i++) {
    d.weekday(i);

    if (d.month() != month) {
      if (!calendar[d.week()])
        calendar[d.week()] = [];

      calendar[d.week()].push(<td key={`_d_${d.date()}`}></td>);
    }

    weekDays.push(
      <td key={`wd_${i}`}>{ d.format('ddd') }</td>
    );
  }

  d.weekday(0);
  var weeks = [];
  do {
    let week = [];
    let isWeekInMonth = false;
    for (let i = 0; i < 7; i++) {
      if (d.month() === month)
        isWeekInMonth = true;

      week.push(<td key={`${d.month()}_${d.date()}`}>{ d.date() }</td>);

      d.date(d.date() + 1);
    }

    if (isWeekInMonth)
      weeks.push(<tr key={`w_${d.week()}`}>{ week }</tr>);
  } while (d.month() === month);

  return (
    <table>
      <thead>
        <tr>{ weekDays }</tr>
      </thead>
      <tbody>{ weeks }</tbody>
    </table>
  )
}

module.exports = Calendar;
