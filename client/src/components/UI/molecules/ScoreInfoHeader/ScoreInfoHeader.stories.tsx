import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfoHeader from './ScoreInfoHeader';

export default {
  title: 'Molecules/ScoreInfoHeader',
  component: ScoreInfoHeader,
} as ComponentMeta<typeof ScoreInfoHeader>;

const Template: ComponentStory<typeof ScoreInfoHeader> = (args) => (
  <ScoreInfoHeader {...args} />
);

export const ScoreInfoHeaderOptions = Template.bind({});
ScoreInfoHeaderOptions.args = {
  scoreName: '악보 제목',
  singer: '가수',
  date: '작성일',
};
