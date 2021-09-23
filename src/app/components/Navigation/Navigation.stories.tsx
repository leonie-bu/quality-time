import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const Calendar = (): JSX.Element => <Navigation activeLink="calendar" />;

export const Overview = (): JSX.Element => (
  <Navigation activeLink="overview"></Navigation>
);
