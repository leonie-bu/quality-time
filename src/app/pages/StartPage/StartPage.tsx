import React from 'react';
import Typography from '../../components/Typography/Typography';
import styles from './StartPage.module.css';

export default function Start(): JSX.Element {
  return (
    <main className={styles.container}>
      <Typography size="l">Hello</Typography>
    </main>
  );
}
