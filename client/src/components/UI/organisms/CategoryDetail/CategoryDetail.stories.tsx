import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryDetail from './CategoryDetail';

export default {
  title: 'Organisms/CategoryDetail',
  component: CategoryDetail,
} as ComponentMeta<typeof CategoryDetail>;

const Template: ComponentStory<typeof CategoryDetail> = (args) => (
  <CategoryDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  scoresByInst: {
    thumbnail:
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: '피아노',
    scores: [],
  },
};
