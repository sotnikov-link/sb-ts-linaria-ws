import { Button } from '@example/ui';
import { action } from '@storybook/addon-actions';
import React from 'react';

export default {
  title: 'Button External',
  component: Button,
};

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
