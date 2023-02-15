import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropDown from './DropDown';

export default {
  title: 'Molecules/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  option: ['쉬움', '어려움'],
  text: '난이도',
};
