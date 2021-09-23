import React from 'react';
import Typography from '../Typography/Typography';
import Icons from '../Icons/Icons';
import styles from './DoneActivity.module.css';

export type DoneActivityProps = {
  header: string;
};

function DoneActivity({ header }: DoneActivityProps): JSX.Element {
  return (
    <section className={styles.container}>
      <Typography size="m">{header}</Typography>
      <div className={styles.donemessage}>
        <Typography size="mm">Wunderbar ⭐</Typography>
      </div>
      <Icons type="division"></Icons>
    </section>
  );
}

export default DoneActivity;
