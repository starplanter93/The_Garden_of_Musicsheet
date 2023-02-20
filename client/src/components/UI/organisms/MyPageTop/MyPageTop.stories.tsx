import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPageTop from './MyPageTop';

export default {
  title: 'Organisms/MyPageTop',
  component: MyPageTop,
} as ComponentMeta<typeof MyPageTop>;

const Template: ComponentStory<typeof MyPageTop> = (args) => (
  <MyPageTop {...args} />
);
export const MyPageTopOptions = Template.bind({});
MyPageTopOptions.args = {
  username: '정준일', // userName
  photoURL:
    'https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e41865ef4499b820e3e5767e03ba1de3fba5ea783e75d95a0552d9d167989a02d', // photoURL
  email: 'test@gmail.com', // email
  cash: '10,000원',
};
