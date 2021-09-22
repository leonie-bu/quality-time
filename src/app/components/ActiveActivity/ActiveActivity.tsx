import React from 'react';
import Icons from '../Icons/Icons';
import Textarea from '../Textarea/Textarea';
import Typography from '../Typography/Typography';
import styles from './ActiveActivity.module.css';

export type ActiveActivityProps = {
  header: string;
  onClickDone: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  handleSubmit: () => void;
};

function ActiveActivity({
  header,
  onClickDone,
  onClickEdit,
  onClickDelete,
  handleSubmit,
}: ActiveActivityProps): JSX.Element {
  return (
    <section className={styles.container}>
      <Typography size="m">{header}</Typography>
      <Textarea handleSubmit={handleSubmit}></Textarea>
      <Icons type="done" onClick={onClickDone}></Icons>
      <Icons type="edit" onClick={onClickEdit}></Icons>
      <Icons type="delete" onClick={onClickDelete}></Icons>
      <Icons type="division"></Icons>
    </section>
  );
}

export default ActiveActivity;
