import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPageModal from './MyPageModal';

export default {
  title: 'Molecules/MyPageModal',
  component: MyPageModal,
} as ComponentMeta<typeof MyPageModal>;

const Template: ComponentStory<typeof MyPageModal> = (args) => (
  <MyPageModal {...args} />
);

export const Default = Template.bind({});
