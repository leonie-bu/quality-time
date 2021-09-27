import React from 'react';
import styles from './CalendarPage.module.css';
import ReactCalendar from '../../components/Calendar/Calendar';

export default function Calendar(): JSX.Element {
  return (
    <main className={styles.container}>
      <ReactCalendar />
    </main>
  );
}
