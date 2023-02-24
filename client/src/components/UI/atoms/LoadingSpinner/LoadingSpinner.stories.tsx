import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = () => (
  <LoadingSpinner />
);

export const Default = Template.bind({});
