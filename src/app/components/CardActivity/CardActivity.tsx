import React from 'react';
import Icons from '../Icons/Icons';
import Typography from '../Typography/Typography';
import styles from './CardActivity.module.css';

export type EmptyActivityProps = {
  header: string;
  onClickPlus: () => void;
};

function EmptyActivity({
  header,
  onClickPlus,
}: EmptyActivityProps): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Typography size="m">{header}</Typography>
        <Icons type="plus" onClick={onClickPlus}></Icons>
      </div>
      <Icons type="division" onClick={onClickPlus}></Icons>
    </section>
  );
}

export default EmptyActivity;
