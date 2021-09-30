import React, { useState } from 'react';
import styles from './CalendarPage.module.css';
import ReactCalendar from '../../components/Calendar/Calendar';
import Textarea from '../../components/Textarea/Textarea';
import Navigation from '../../components/Navigation/Navigation';
import PlusBackgroundIcon from '../../components/assets/PlusBackgroundIcon';

export default function Calendar(): JSX.Element {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('');

  function handleSubmit() {
    console.log('Hey');
  }
  function handleChange(value: string) {
    setActivity(value);
  }

  return (
    <main className={styles.container}>
      <section className={styles.calendar}>
        <ReactCalendar setDate={setDate} date={date} />
      </section>
      <section className={styles.textarea}>
        <Textarea
          value={activity}
          onChange={handleChange}
          handleSubmit={() => handleSubmit()}
        />
        <PlusBackgroundIcon type="submit" />
      </section>
      <Navigation className={styles.navigation} activeLink="calendar" />
    </main>
  );
}
