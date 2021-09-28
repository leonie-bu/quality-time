import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Typography from '../Typography/Typography';

export default function CalendarDate(): JSX.Element {
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
