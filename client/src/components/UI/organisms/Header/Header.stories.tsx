import { ComponentMeta, ComponentStory } from '@storybook/react';

import Headers from './Header';

export default {
  title: 'Organisms/Header',
  component: Headers,
} as ComponentMeta<typeof Headers>;

const Template: ComponentStory<typeof Headers> = () => <Headers />;

export const Header = Template.bind({});
