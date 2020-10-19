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

    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#dateRange');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', (datepicker) => {
        prop.dateRangeCallback(datepicker.data.value());
      });
    }
  }, []);

    const minDate = new Date()
    const maxDate = addDays(new Date(), 7)
  return (
    <div className="column is-one-third">
      <input className="green" id="dateRange" type="date" data-is-range="true" data-show-header="false" data-min-date={minDate} data-max-date={maxDate} data-start-date={minDate} data-end-date={maxDate}/>
    </div>
  );
}

export default DateInput;