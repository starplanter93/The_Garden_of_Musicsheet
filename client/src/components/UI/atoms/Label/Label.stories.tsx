import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { placeholder: 'placeholder' };
