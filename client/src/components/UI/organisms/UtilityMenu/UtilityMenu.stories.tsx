import { ComponentMeta, ComponentStory } from '@storybook/react';
import UtilityMenus from './UtilityMenu';

export default {
  title: 'Organisms/UtilityMenu',
  component: UtilityMenus,
} as ComponentMeta<typeof UtilityMenus>;

const Template: ComponentStory<typeof UtilityMenus> = () => <UtilityMenus />;

export const UtilityMenu = Template.bind({});
