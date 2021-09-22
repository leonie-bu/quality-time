import React from 'react';
import CalendarDate from './CalendarDate';
import 'react-calendar/dist/Calendar.css';

export default {
  title: 'Component/CalendarDate',
  component: CalendarDate,
};

export const CalDate = (): JSX.Element => <CalendarDate></CalendarDate>;
