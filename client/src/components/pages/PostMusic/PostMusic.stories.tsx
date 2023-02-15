import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostMusic from './PostMusic';

export default {
  title: 'Pages/PostMusic',
  component: PostMusic,
} as ComponentMeta<typeof PostMusic>;

const Template: ComponentStory<typeof PostMusic> = () => <PostMusic />;

export const Default = Template.bind({});
