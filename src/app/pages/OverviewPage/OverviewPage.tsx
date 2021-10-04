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

  function handleOnClickDelete(activityCard: ActivityCards) {
    removeActivityCard(activityCard);
  }

  function handleOnClickDone(activityCard: ActivityCards) {
    doneActivityCard({ ...activityCard, status: 'done' });
  }

  return (
    <main className={styles.container}>
      <section className={styles.cards}>
        {activityCards.map((activityCard) => {
          switch (activityCard.status) {
            case 'active':
              return (
                <ActiveActivity
                  key={activityCard.date}
                  type="active"
                  date={activityCard.date}
                  onClickDone={() => handleOnClickDone(activityCard)}
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
                  onClickDelete={() => handleOnClickDelete(activityCard)}
                />
              );
            default:
              return (
                <ActiveActivity
                  key={activityCard.date}
                  type="active"
                  date={activityCard.date}
                  onClickDone={() => handleOnClickDone(activityCard)}
                  handleSubmit={() => console.log('Test')}
                  onChange={() => console.log('Test')}
                  value={activityCard.activity}
                />
              );
          }
        })}
      </section>
      <Navigation className={styles.navigation} activeLink="overview" />
    </main>
  );
}
