import React from 'react';
import Typography from '../Typography/Typography';
import Icons from '../Icons/Icons';
import styles from './DoneActivity.module.css';

export type DoneActivityProps = {
  date: string;
  type: 'done';
  onClickDelete: () => void;
};

function DoneActivity({
  date,
  type = 'done',
  onClickDelete,
}: DoneActivityProps): JSX.Element {
  return (
    <section className={`${type === 'done' && styles.container}`}>
      <Typography size="m">{date}</Typography>
      <Icons type="delete" onClick={onClickDelete}></Icons>
      <div className={styles.donemessage}>
        <Typography size="mm">Wunderbar ⭐</Typography>
      </div>
      <Icons type="division"></Icons>
    </section>
  );
}

export default DoneActivity;

// className={`${styles.container} ${type === 'done' && styles.cardDone}`}
