import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
};

export const Text = (): JSX.Element => (
  <Textarea
    value="Date"
    onChange={() => console.log('Test')}
    handleSubmit={() => console.log('Submitted')}
  />
);
