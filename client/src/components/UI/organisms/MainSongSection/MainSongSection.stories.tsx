import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainSongSection from './MainSongSection';

export default {
  title: 'Organisms/MainSongSection',
  component: MainSongSection,
} as ComponentMeta<typeof MainSongSection>;

const Template: ComponentStory<typeof MainSongSection> = (args) => (
  <MainSongSection {...args} />
);

export const MainSongSectionOptions = Template.bind({});
// MainSongSectionOptions.args = {
//   songTitle: '노래제목',
//   singer: '가수',
//   scoreName: '악보제목',
//   scoreWriter: '악보제작자',
//   instrument: '사용악기',
//   difficulty: '난이도',
//   price: '가격',
// };
