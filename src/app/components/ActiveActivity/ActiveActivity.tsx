import React from 'react';
import DivisionLineIcon from '../assets/DivisionLine';
import Icons from '../Icons/Icons';
import Textarea from '../Textarea/Textarea';
import Typography from '../Typography/Typography';
import styles from './ActiveActivity.module.css';

export type ActiveActivityProps = {
  type: 'active';
  onClickDone: () => void;
  handleSubmit: () => void;
  onChange: (value: string) => void;
  value: string;
  date: string;
  className?: string;
};

function ActiveActivity({
  type = 'active',
  onClickDone,
  handleSubmit,
  onChange,
  value,
  date,
}: ActiveActivityProps): JSX.Element {
  return (
    <section className={`${type === 'active' && styles.container}`}>
      <div className={styles.headerActiveCard}>
        <Typography size="m">{date}</Typography>
        <Icons type="done" onClick={onClickDone}></Icons>
      </div>
      <div className={styles.textarea}>
        <Textarea
          handleSubmit={handleSubmit}
          onChange={onChange}
          value={value}
        ></Textarea>
      </div>
    </section>
  );
}

export default ActiveActivity;

// className={`${styles.container}
//       ${type === 'active' && styles.cardActive}`}
