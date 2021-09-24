import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const Calendar = (): JSX.Element => (
  <Navigation to="" activeLink="calendar" />
);

export const Overview = (): JSX.Element => (
  <Navigation to="" activeLink="overview" />
);
