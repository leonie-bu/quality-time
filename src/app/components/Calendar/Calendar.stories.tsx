import React from 'react';
import ReactCalendar from './Calendar';
import 'react-calendar/dist/Calendar.css';

export default {
  title: 'Component/Calendar',
  component: ReactCalendar,
};

export const Cal = (): JSX.Element => (
  <ReactCalendar
    date={new Date()}
    setDate={() => console.log('Test')}
  ></ReactCalendar>
);
