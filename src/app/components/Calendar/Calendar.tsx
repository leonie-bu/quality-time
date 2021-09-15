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
import styles from './Calendar.module.css';

export default function ReactCalendar(): JSX.Element {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} className={styles.cal} />
    </div>
  );
}