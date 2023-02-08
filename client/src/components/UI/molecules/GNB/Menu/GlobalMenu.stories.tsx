import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import GlobalMenu from './GlobalMenu';

export default {
  title: 'Molecules/GNB',
  component: GlobalMenu,
  decorators: [withRouter],
} as ComponentMeta<typeof GlobalMenu>;

const Template: ComponentStory<typeof GlobalMenu> = () => <GlobalMenu />;

export const Menu = Template.bind({});
