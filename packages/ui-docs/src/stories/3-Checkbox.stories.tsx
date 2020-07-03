import { Checkbox } from '@example/ui';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Playground } from './Playground';

export default {
  title: 'Checkbox External',
  component: Checkbox,
};

export const Simple = () => (
  <Checkbox onClick={action('clicked')}>Hello Checkbox</Checkbox>
);

export const Emoji = () => (
  <Checkbox onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Checkbox>
);

export const Player = () => <Playground />;
