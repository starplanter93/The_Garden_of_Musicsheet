import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserAuthInput from './UserAuthInput';

export default {
  title: 'Molecules/UserAuthInput',
  component: UserAuthInput,
} as ComponentMeta<typeof UserAuthInput>;

const Template: ComponentStory<typeof UserAuthInput> = (args) => (
  <UserAuthInput {...args} />
);

export const Default = Template.bind({});
Default.args = { placeholder: '이메일' };
