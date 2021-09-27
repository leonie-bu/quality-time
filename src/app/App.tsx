import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route path="/about">
            <main>About</main>
          </Route>
          <Route path="/">
            <main>Home</main>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
