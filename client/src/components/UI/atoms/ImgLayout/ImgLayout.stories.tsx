import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImgLayout from './ImgLayout';

export default {
  title: 'Atoms/ImgLayout',
  component: ImgLayout,
} as ComponentMeta<typeof ImgLayout>;

const Template: ComponentStory<typeof ImgLayout> = (args) => (
  <ImgLayout {...args} />
);

export const ImgLayoutOptions = Template.bind({});
