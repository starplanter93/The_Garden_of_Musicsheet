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
// MainGridOptions.args = {
//   songTitle: '노래제목',
//   singer: '가수',
//   scoreName: '악보제목',
//   scoreWriter: '악보제작자',
//   instrument: '사용악기',
//   difficulty: '난이도',
//   price: '가격',
// };
