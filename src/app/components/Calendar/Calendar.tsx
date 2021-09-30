/*import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function ReactCalendar(): JSX.Element {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
} */

import React from 'react';
import Calendar from 'react-calendar';
import type { DateCallback } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';
import Typography from '../Typography/Typography';
import styles from './Calendar.module.css';

type CalendarProps = {
  setDate: DateCallback;
  date: Date;
};

export default function ReactCalendar({
  setDate,
  date,
}: CalendarProps): JSX.Element {
  return (
    <div className={styles.container}>
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
