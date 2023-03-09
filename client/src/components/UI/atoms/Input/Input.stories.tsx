import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  theme: 'basic',
  size: 'm',
  setIsFocused: () => undefined,
  setUserInput: () => undefined,
};

export const InputWithoutIcon = Template.bind({});
InputWithoutIcon.args = {
  theme: 'icon-input-no-label',
  size: 's',
  setIsFocused: () => undefined,
  setUserInput: () => undefined,
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  theme: 'icon-input',
  size: 's',
  setIsFocused: () => undefined,
  setUserInput: () => undefined,
};
