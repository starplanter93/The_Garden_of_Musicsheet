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
  score: {
    difficulty: '중간',
    instType: '피아노',
    songName: '오르트구름',
    artist: '윤하',
    author: 'lee',
    price: '5000',
  },
};
