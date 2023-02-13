import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreList from './ScoreList';

export default {
  title: 'Molecules/ScoreList',
  component: ScoreList,
} as ComponentMeta<typeof ScoreList>;

const Template: ComponentStory<typeof ScoreList> = (args) => (
  <ScoreList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  btnType: 'text',
};
