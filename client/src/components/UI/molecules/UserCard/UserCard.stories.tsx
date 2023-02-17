import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserCard from './UserCard';

export default {
  title: 'Molecules/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
);

export const UserCardOptions = Template.bind({});
UserCardOptions.args = {
  author: '97세기타마스터백종원',
  profileImg:
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
};
