import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfoCard from './ScoreInfoCard';

export default {
  title: 'Molecules/ScoreInfoCard',
  component: ScoreInfoCard,
} as ComponentMeta<typeof ScoreInfoCard>;

const Template: ComponentStory<typeof ScoreInfoCard> = (args) => (
  <ScoreInfoCard {...args} />
);

export const ScoreInfoOptions = Template.bind({});
ScoreInfoOptions.args = {
  instrument: '어쿠스틱 기타',
  difficulty: '어려움',
  page: '7',
  scoreType: '타브 악보',
};
