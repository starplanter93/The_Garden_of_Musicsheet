import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainScoreList from './MainScoreList';

export default {
  title: 'Molecules/MainScoreList',
  component: MainScoreList,
} as ComponentMeta<typeof MainScoreList>;

const Template: ComponentStory<typeof MainScoreList> = (args) => (
  <MainScoreList {...args} />
);

export const MainScoreListOptions = Template.bind({});
MainScoreListOptions.args = {
  scoreName: '악보 제목 입력란',
  scoreWriter: '악보 제작자 입력란',
  instrument: '악기 입력란',
  difficulty: '난이도',
  price: '가격',
};
