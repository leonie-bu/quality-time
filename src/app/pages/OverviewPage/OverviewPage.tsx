import React from 'react';
import ActiveActivity from '../../components/ActiveActivity/ActiveActivity';
import Navigation from '../../components/Navigation/Navigation';
import Typography from '../../components/Typography/Typography';
import useActivityCard from '../../hooks/useCalendar';
import type { ActivityCards } from '../../types';
import styles from './OverviewPage.module.css';

export default function Overview(): JSX.Element {
  const { activityCards }: { activityCards: ActivityCards[] } =
    useActivityCard();

  function handleonClickDone() {
    console.log('done');
  }

  function handleonClickEdit() {
    console.log('edit');
  }

  function handleonClickDelete() {
    console.log('delete');
  }

  return (
    <main className={styles.container}>
      <Typography size="l">Übersicht</Typography>
      <section className={styles.activity}>
        {activityCards.map((activityCard) => (
          <ActiveActivity
            date={activityCard.date}
            onClickDone={() => handleonClickDone}
            onClickEdit={() => handleonClickEdit}
            onClickDelete={() => handleonClickDelete}
            handleSubmit={() => handleonClickDelete}
            onChange={() => handleonClickDelete}
            value={activityCard.activity}
          />
        ))}
      </section>
      <Navigation activeLink="overview" />
    </main>
  );
}
