import React from 'react';
import styles from './Textarea.module.css';

type TextareaProps = {
  handleSubmit: () => void;
};

export default function Textarea({ handleSubmit }: TextareaProps): JSX.Element {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="activity"
        rows={3}
        cols={20}
        placeholder="Mach was Schönes"
        className={styles.textarea}
        maxLength={40}
      ></textarea>
    </form>
  );
}
