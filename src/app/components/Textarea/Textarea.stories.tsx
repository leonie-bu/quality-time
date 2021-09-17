import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
};

export const Text = (): JSX.Element => (
  <Textarea handleSubmit={() => console.log('Submitted')} />
);
