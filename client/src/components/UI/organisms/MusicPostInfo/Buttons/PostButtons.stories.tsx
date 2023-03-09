import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostButtons from './PostButtons';

export default {
  title: 'Organisms/PostButtons',
  component: PostButtons,
} as ComponentMeta<typeof PostButtons>;

const Template: ComponentStory<typeof PostButtons> = (args) => <PostButtons />;

export const Default = Template.bind({});
