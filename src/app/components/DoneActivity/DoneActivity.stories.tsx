import React from 'react';
import DoneActivity from './DoneActivity';

export default {
  title: 'Component/DoneActivity',
  component: DoneActivity,
};

export const DoneCard = (): JSX.Element => (
  <DoneActivity
    date="Datum"
    type="done"
    onClickDelete={() => console.log('Delete')}
  ></DoneActivity>
);
