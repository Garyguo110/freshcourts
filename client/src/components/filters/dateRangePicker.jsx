import React, { useEffect } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import "bulma-calendar/dist/css/bulma-calendar.min.css"
import {addDays} from 'date-fns';

function DateInput(prop) {
  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {});

    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to date:selected event
      calendar.on('date:selected', (date) => {
        console.log(date);
      });
    });

    const element = document.querySelector('#dateRange');
    if (element) {
      element.bulmaCalendar.on('select', (datepicker) => {
        prop.dateRangeCallback(datepicker.data.value());
      });
    }
  }, []);

  // minDate is the minimum available date on the DateRangePicker and its value is always the current date
  const minDate = new Date()
  // maxDate is the maximum available date on the DateRangePicker and its value is always 7 days (a week) from the current date
  const maxDate = addDays(new Date(), 7)

  return (
    <div className="column is-one-third">
      <input className="green" id="dateRange" type="date" data-is-range="true" data-show-header="false" data-min-date={minDate} data-max-date={maxDate} data-start-date={minDate} data-end-date={maxDate}/>
    </div>
  );
}

export default DateInput;