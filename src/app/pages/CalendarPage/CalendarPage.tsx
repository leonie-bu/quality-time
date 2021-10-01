import React, { useState } from 'react';
import styles from './CalendarPage.module.css';
import ReactCalendar from '../../components/Calendar/Calendar';
import Textarea from '../../components/Textarea/Textarea';
import Navigation from '../../components/Navigation/Navigation';
import PlusBackgroundIcon from '../../components/assets/PlusBackgroundIcon';
import useActivityCard from '../../hooks/useCalendar';

export default function Calendar(): JSX.Element {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('');
  const { addActivityCard } = useActivityCard();

  function addCard() {
    const activityCard = {
      date: date.toDateString(),
      activity: activity,
    };
    addActivityCard(activityCard);
  }
  function handleChange(value: string) {
    setActivity(value);
  }

  return (
    <main className={styles.container}>
      <form
        onSubmit={(event) => {
          event.preventDefault(), addCard();
        }}
      >
        <section className={styles.calendar}>
          <ReactCalendar setDate={setDate} date={date} />
        </section>
        <section className={styles.textarea}>
          <Textarea
            value={activity}
            onChange={(value: string) => handleChange(value)}
          />
          <button className={styles.button}>
            <PlusBackgroundIcon type="submit" />
          </button>
        </section>
      </form>
      <Navigation className={styles.navigation} activeLink="calendar" />
    </main>
  );
}
