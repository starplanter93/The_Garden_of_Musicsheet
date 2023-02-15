import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostSidebar from './PostSidebar';

export default {
  title: 'Molecules/PostSidebar',
  component: PostSidebar,
} as ComponentMeta<typeof PostSidebar>;

const Template: ComponentStory<typeof PostSidebar> = (args) => <PostSidebar />;

export const Default = Template.bind({});
