import { ComponentMeta, ComponentStory } from '@storybook/react';
import Buttons from './Button';

export default {
  title: 'Atoms/Button',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
  theme: 'primary',
  size: 'auto',
  clicked: false,
  disabled: false,
};
