import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserAuth from './UserAuth';

export default {
  title: 'Organisms/UserAuth',
  component: UserAuth,
} as ComponentMeta<typeof UserAuth>;

const Template: ComponentStory<typeof UserAuth> = (args) => (
  <UserAuth {...args} />
);

export const Login = Template.bind({});

export const SignUp = Template.bind({});
SignUp.args = { type: 'SignUp' };
