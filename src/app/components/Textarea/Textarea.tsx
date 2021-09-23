import React, { useState } from 'react';
import styles from './Textarea.module.css';

type TextareaProps = {
  handleSubmit: () => void;
  className?: string;
};

export default function Textarea({ handleSubmit }: TextareaProps): JSX.Element {
  const [activity, setActivity] = useState<string>('');
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="activity"
        rows={3}
        cols={20}
        placeholder="Mach was Schönes"
        className={styles.textarea}
        maxLength={40}
        value={activity}
        onChange={(event) => setActivity(event.target.value)}
      ></textarea>
    </form>
  );
}
