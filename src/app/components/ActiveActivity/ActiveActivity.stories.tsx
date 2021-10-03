import React from 'react';
import ActiveActivity from './ActiveActivity';

export default {
  title: 'Component/ActiveActivity',
  component: ActiveActivity,
};

export const ActiveCard = (): JSX.Element => (
  <ActiveActivity
    type="active"
    onClickDone={() => console.log('Done')}
    handleSubmit={() => console.log('Submit')}
    onChange={() => console.log('Submit')}
    value="Platzhalter"
    date="Datum"
  ></ActiveActivity>
);
