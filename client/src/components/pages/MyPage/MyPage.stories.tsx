import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPage from './MyPage';

export default {
  title: 'Pages/MyPage',
  component: MyPage,
} as ComponentMeta<typeof MyPage>;

const Template: ComponentStory<typeof MyPage> = () => <MyPage />;

export const Default = Template.bind({});
