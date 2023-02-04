import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserButtons from './UserButton';

export default {
  title: 'Molecules/GNB',
  component: UserButtons,
} as ComponentMeta<typeof UserButtons>;

const Template: ComponentStory<typeof UserButtons> = (args) => (
  <UserButtons {...args} />
);

export const UserButton = Template.bind({});
