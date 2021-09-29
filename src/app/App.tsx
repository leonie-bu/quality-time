import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calendar from './pages/CalendarPage/CalendarPage';
import Start from './pages/StartPage/StartPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
