import React from 'react';
import styles from './CalendarPage.module.css';
import PlusBackgroundIcon from '../../components/assets/PlusBackgroundIcon';
import ReactCalendar from '../../components/Calendar/Calendar';

export default function Calendar(): JSX.Element {
  return (
    <main className={styles.container}>
      <section className={styles.calendar}>
        <ReactCalendar />
      </section>
      <section className={styles.textarea}>
        <PlusBackgroundIcon />
      </section>
    </main>
  );
}
