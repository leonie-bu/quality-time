import React from 'react';
import EmptyActivity from './CardActivity';

export default {
  title: 'Component/EmptyActivity',
  component: EmptyActivity,
};

export const EmptyCard = (): JSX.Element => (
  <EmptyActivity
    header="22. September"
    onClickPlus={() => console.log('Test')}
  ></EmptyActivity>
);
