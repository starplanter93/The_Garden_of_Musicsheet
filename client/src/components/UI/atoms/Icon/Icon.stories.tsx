import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icons from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const Icon = Template.bind({});
