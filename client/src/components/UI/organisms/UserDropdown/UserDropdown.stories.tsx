import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserDropdowns from './UserDropdown';

export default {
  title: 'Organisms/UserDropdown',
  component: UserDropdowns,
} as ComponentMeta<typeof UserDropdowns>;

const Template: ComponentStory<typeof UserDropdowns> = () => <UserDropdowns />;

export const UserDropdown = Template.bind({});
