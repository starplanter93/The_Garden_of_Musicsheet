import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostInput from './PostInput';

export default {
  title: 'Molecules/PostInput',
  component: PostInput,
} as ComponentMeta<typeof PostInput>;

const Template: ComponentStory<typeof PostInput> = (args) => (
  <PostInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: '곡 제목',
  placeholder: '예시) 사건의 지평선',
};
