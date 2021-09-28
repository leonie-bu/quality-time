import React from 'react';
import styles from './CalendarPage.module.css';
import CalendarDate from '../../components/CalendarDate/CalendarDate';
import Textarea from '../../components/Textarea/Textarea';
import PlusBackgroundIcon from '../../components/assets/PlusBackgroundIcon';
import Navigation from '../../components/Navigation/Navigation';

export default function Calendar(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <CalendarDate />
        <Textarea />
        <PlusBackgroundIcon />
        <Navigation />
      </div>
    </main>
  );
}
