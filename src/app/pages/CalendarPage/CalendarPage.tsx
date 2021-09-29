import React from 'react';
import styles from './CalendarPage.module.css';
import PlusBackgroundIcon from '../../components/assets/PlusBackgroundIcon';
import ReactCalendar from '../../components/Calendar/Calendar';
import Textarea from '../../components/Textarea/Textarea';
import Navigation from '../../components/Navigation/Navigation';

export default function Calendar(): JSX.Element {
  return (
    <main className={styles.container}>
      <section className={styles.calendar}>
        <ReactCalendar />
      </section>
      <section className={styles.textarea}>
        <Textarea />
        <PlusBackgroundIcon />
      </section>
      <Navigation className={styles.navigation} activeLink="calendar" />
    </main>
  );
}
