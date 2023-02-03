import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryCovers from './CategoryCover';

export default {
  title: 'Molecules/CategoryCover',
  component: CategoryCovers,
} as ComponentMeta<typeof CategoryCovers>;

const Template: ComponentStory<typeof CategoryCovers> = (args) => (
  <CategoryCovers {...args} />
);

export const CategoryCover = Template.bind({});
CategoryCover.args = {
  category: '곡',
  thumbnail:
    'https://images.unsplash.com/photo-1674500287064-a91d52ae25a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  title: '사건의 지평선',
  artist: '윤하',
};
