import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfo from './ScoreInfo';

export default {
  title: 'Molecules/ScoreInfo',
  component: ScoreInfo,
} as ComponentMeta<typeof ScoreInfo>;

const Template: ComponentStory<typeof ScoreInfo> = (args) => (
  <ScoreInfo {...args} />
);

export const ScoreInfoOptions = Template.bind({});
ScoreInfoOptions.args = {
  instrument: '어쿠스틱 기타',
  difficulty: '어려움',
  page: '7',
  scoreType: '타브 악보',
};
