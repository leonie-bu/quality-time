/*import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function ReactCalendar(): JSX.Element {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
} */

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';
import Typography from '../Typography/Typography';

export default function ReactCalendar(): JSX.Element {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onClickDay={setDate}
        value={date}
        next2Label={null}
        prev2Label={null}
      />
      <Typography size="m"> {date.toDateString()}</Typography>
    </div>
  );
}
