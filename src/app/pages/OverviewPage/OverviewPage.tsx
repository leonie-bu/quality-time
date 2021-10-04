import React from 'react';
import ActiveActivity from '../../components/ActiveActivity/ActiveActivity';
import DoneActivity from '../../components/DoneActivity/DoneActivity';
import Navigation from '../../components/Navigation/Navigation';
import useActivityCard from '../../hooks/useCalendar';
import type { ActivityCards } from '../../types';
import styles from './OverviewPage.module.css';

export default function Overview(): JSX.Element {
  const { activityCards, removeActivityCard, doneActivityCard } =
    useActivityCard();

  function handleonClickDelete(activityCard: ActivityCards) {
    removeActivityCard(activityCard);
  }

  function handleonClickDone(activityCard: ActivityCards) {
    doneActivityCard({ ...activityCard, status: 'done' });
  }

  return (
    <main className={styles.container}>
      <section className={styles.cards}>
        {activityCards.map((activityCard) => {
          switch (activityCard.status) {
            case 'active':
            case undefined:
              return (
                <ActiveActivity
                  key={activityCard.date}
                  type="active"
                  date={activityCard.date}
                  onClickDone={() => handleonClickDone(activityCard)}
                  handleSubmit={() => console.log('Test')}
                  onChange={() => console.log('Test')}
                  value={activityCard.activity}
                />
              );
            case 'done':
              return (
                <DoneActivity
                  key={activityCard.date}
                  date={activityCard.date}
                  type="done"
                  onClickDelete={() => handleonClickDelete(activityCard)}
                />
              );
          }
        })}
      </section>
      <Navigation className={styles.navigation} activeLink="overview" />
    </main>
  );
}
