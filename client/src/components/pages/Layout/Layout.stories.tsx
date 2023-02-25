import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout from './Layout';

export default {
  title: 'Pages/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => <Layout />;

export const Default = Template.bind({});
