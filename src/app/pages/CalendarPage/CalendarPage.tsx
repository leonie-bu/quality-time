import React from 'react';
import styles from './CalendarPage.module.css';
import CalendarDate from '../../components/CalendarDate/CalendarDate';

export default function Calendar(): JSX.Element {
  return (
    <main className={styles.container}>
      <CalendarDate />
    </main>
  );
}
