import React from 'react';
import Icons from '../Icons/Icons';
import Textarea from '../Textarea/Textarea';
import Typography from '../Typography/Typography';
import styles from './ActiveActivity.module.css';

export type ActiveActivityProps = {
  type: 'active';
  onClickDone: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  handleSubmit: () => void;
  onChange: (value: string) => void;
  value: string;
  date: string;
};

function ActiveActivity({
  type = 'active',
  onClickDone,
  onClickEdit,
  onClickDelete,
  handleSubmit,
  onChange,
  value,
  date,
}: ActiveActivityProps): JSX.Element {
  return (
    <section className={`${type === 'active' && styles.container}`}>
      <Typography size="m">{date}</Typography>
      <div className={styles.textarea}>
        <Textarea
          handleSubmit={handleSubmit}
          onChange={onChange}
          value={value}
        ></Textarea>
      </div>
      <div className={styles.icons}>
        <Icons type="done" onClick={onClickDone}></Icons>
        <Icons type="edit" onClick={onClickEdit}></Icons>
        <Icons type="delete" onClick={onClickDelete}></Icons>
      </div>
    </section>
  );
}

export default ActiveActivity;

// className={`${styles.container}
//       ${type === 'active' && styles.cardActive}`}
