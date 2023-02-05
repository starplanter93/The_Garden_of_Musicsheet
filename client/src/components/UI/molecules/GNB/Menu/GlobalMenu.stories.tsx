import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalMenu from './GlobalMenu';

export default {
  title: 'Molecules/GNB',
  component: GlobalMenu,
} as ComponentMeta<typeof GlobalMenu>;

const Template: ComponentStory<typeof GlobalMenu> = () => <GlobalMenu />;

export const Menu = Template.bind({});
