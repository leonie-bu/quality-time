import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
