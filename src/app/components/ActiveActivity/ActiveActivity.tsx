import React from 'react';
import Icons from '../Icons/Icons';
import Textarea from '../Textarea/Textarea';
import Typography from '../Typography/Typography';
import styles from './ActiveActivity.module.css';

export type ActiveActivityProps = {
  date: string;
  onClickDone: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  handleSubmit: () => void;
  onChange: (value: string) => void;
  value: string;
};

function ActiveActivity({
  date,
  onClickDone,
  onClickEdit,
  onClickDelete,
  handleSubmit,
  onChange,
  value,
}: ActiveActivityProps): JSX.Element {
  return (
    <section className={styles.container}>
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
      <Icons type="division"></Icons>
    </section>
  );
}

export default ActiveActivity;
