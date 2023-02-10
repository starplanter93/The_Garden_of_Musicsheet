import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostInput from './PostInput';

export default {
  title: 'Molecules/PostInput',
  component: PostInput,
} as ComponentMeta<typeof PostInput>;

const Template: ComponentStory<typeof PostInput> = (args) => (
  <PostInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
  type: 'input',
  text: '곡 제목',
  placeholder: '예시) 사건의 지평선',
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  type: 'dropdown',
  text: '저작권 정보',
  placeholder: '곡 제목을 검색해주세요',
};
