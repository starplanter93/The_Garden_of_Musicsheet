import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryDetail from './CategoryDetail';

export default {
  title: 'Organisms/CategoryDetail',
  component: CategoryDetail,
} as ComponentMeta<typeof CategoryDetail>;

const Template: ComponentStory<typeof CategoryDetail> = () => (
  <CategoryDetail />
);

export const Default = Template.bind({});
