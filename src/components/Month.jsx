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

  d.date(1);
  while (d.month() == month) {
    if (!calendar[d.week()])
      calendar[d.week()] = [];

    if (d.month() === month)
      calendar[d.week()].push(<td key={`d_${d.date()}`}>{ d.date() }</td>);

    d.date(d.date() + 1);
  }

  if (calendar.hasOwnProperty(1) && !calendar.hasOwnProperty(2)) {
    calendar[Math.max.apply(null, Object.keys(calendar)) + 1] = calendar[1];
    delete calendar[1];
  }

  var weeks = [];
  for (let week in calendar)
    weeks.push(<tr key={`w_${week}`}>{ calendar[week] }</tr>);

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
