import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfoExplain from './ScoreInfoExplain';

export default {
  title: 'Molecules/ScoreInfoExplain',
  component: ScoreInfoExplain,
} as ComponentMeta<typeof ScoreInfoExplain>;

const Template: ComponentStory<typeof ScoreInfoExplain> = (args) => (
  <ScoreInfoExplain {...args} />
);

export const ScoreInfoExplainOptions = Template.bind({});
ScoreInfoExplainOptions.args = {
  scoreExplain:
    '게시글 등록자(악보 제작자)가 작성한 악보에 대한 상세 정보와 설명',
};
