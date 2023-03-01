import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainGrid from './MainGrid';

export default {
  title: 'Organisms/MainGrid',
  component: MainGrid,
} as ComponentMeta<typeof MainGrid>;

const Template: ComponentStory<typeof MainGrid> = (args) => (
  <MainGrid {...args} />
);

export const MainGridOptions = Template.bind({});
