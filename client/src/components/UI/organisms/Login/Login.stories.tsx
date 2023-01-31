import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from './Login';

export default {
  title: 'Organisms/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const Default = Template.bind({});
