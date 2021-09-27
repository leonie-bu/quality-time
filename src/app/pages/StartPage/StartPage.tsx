import React from 'react';
import FlowerIconSmall from '../../components/assets/FlowerIconSmall';
import LetsGoIcon from '../../components/assets/LetsGo';
import Typography from '../../components/Typography/Typography';
import styles from './StartPage.module.css';

export default function Start(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <FlowerIconSmall />
        <Typography size="l" className={styles.text}>
          Nimm Dir Zeit für das, was oft zu kurz kommt:
        </Typography>
        <Typography size="l">
          Zeit für Dich, <br /> Zeit für Gutes
        </Typography>
        <LetsGoIcon className={styles.letsgo} />
      </div>
    </main>
  );
}
