import { ComponentMeta, ComponentStory } from '@storybook/react';
import EditScore from './EditScore';

export default {
  title: 'Pages/EditScore',
  component: EditScore,
} as ComponentMeta<typeof EditScore>;

const Template: ComponentStory<typeof EditScore> = () => <EditScore />;

export const Default = Template.bind({});
