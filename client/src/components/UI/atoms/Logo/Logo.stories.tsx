import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logos from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logos,
} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos> = (args) => <Logos {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  type: 'pc',
};
