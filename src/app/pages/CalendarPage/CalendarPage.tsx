import React from 'react';
import styles from './CalendarPage.module.css';
import CalendarDate from '../../components/CalendarDate/CalendarDate';
import PlusBackgroundIcon from '../../components/assets/PlusBackgroundIcon';

export default function Calendar(): JSX.Element {
  return (
    <main className={styles.container}>
      <section className={styles.calendar}>
        <CalendarDate />
      </section>
      <section className={styles.textarea}>
        <PlusBackgroundIcon />
      </section>
    </main>
  );
}
