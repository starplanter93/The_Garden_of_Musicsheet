import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Headers from './Header';

export default {
  title: 'Organisms/Header',
  component: Headers,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/auth',
    },
  },
} as ComponentMeta<typeof Headers>;

const Template: ComponentStory<typeof Headers> = () => <Headers />;

export const Header = Template.bind({});
