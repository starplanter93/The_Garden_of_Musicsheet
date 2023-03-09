import { ComponentMeta, ComponentStory } from '@storybook/react';
import Main from './Main';

export default {
  title: 'Pages/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Default = Template.bind({});
