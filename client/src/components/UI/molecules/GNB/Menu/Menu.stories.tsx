import { ComponentMeta, ComponentStory } from '@storybook/react';
import GNBMenu from './Menu';

export default {
  title: 'Molecules/GNB',
  component: GNBMenu,
} as ComponentMeta<typeof GNBMenu>;

const Template: ComponentStory<typeof GNBMenu> = () => <GNBMenu />;

export const Menu = Template.bind({});
