import React from 'react';
import styles from './Textarea.module.css';

type TextareaProps = {
  handleSubmit?: (value: string) => void;
  onChange: (value: string) => void;
  value: string;
  className?: string;
};

export default function Textarea({
  onChange,
  value,
}: TextareaProps): JSX.Element {
  return (
    <div>
      <textarea
        name="activity"
        rows={3}
        cols={20}
        placeholder="Mach was Schönes"
        className={styles.textarea}
        maxLength={40}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      ></textarea>
    </div>
  );
}
