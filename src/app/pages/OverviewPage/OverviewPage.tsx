import React from 'react';
import ActiveActivity from '../../components/ActiveActivity/ActiveActivity';
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
    <main>
      <Typography size="l">Übersicht</Typography>
      <section>
        {activityCards.map((activityCard) => (
          <ActiveActivity
            date={activityCards.date}
            onClickDone={() => handleonClickDone}
            onClickEdit={() => handleonClickEdit}
            onClickDelete={() => handleonClickDelete}
            handleSubmit={}
            onChange={}
            value={activityCards.activity}
          />
        ))}
        ;
      </section>
    </main>
  );
}
