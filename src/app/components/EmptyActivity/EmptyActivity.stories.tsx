import React from 'react';
import EmptyActivity from './EmptyActivity';

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
