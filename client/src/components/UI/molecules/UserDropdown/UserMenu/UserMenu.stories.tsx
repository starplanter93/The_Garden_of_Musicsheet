import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserMenus from './UserMenu';

export default {
  title: 'Molecules/UserDropdown',
  component: UserMenus,
} as ComponentMeta<typeof UserMenus>;

const Template: ComponentStory<typeof UserMenus> = () => <UserMenus />;

export const UserMenu = Template.bind({});
