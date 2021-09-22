import React from 'react';
import ActiveActivity from './ActiveActivity';

export default {
  title: 'Component/ActiveActivity',
  component: ActiveActivity,
};

export const ActiveCard = (): JSX.Element => (
  <ActiveActivity
    header="21.September"
    onClickDone={() => console.log('Done')}
    onClickEdit={() => console.log('Edit')}
    onClickDelete={() => console.log('Delete')}
    handleSubmit={() => console.log('Submit')}
  ></ActiveActivity>
);
