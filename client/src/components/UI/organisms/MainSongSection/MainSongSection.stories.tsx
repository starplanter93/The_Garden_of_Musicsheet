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
MainSongSectionOptions.args = {
  songTitle: '노래제목',
  singer: '가수',
  scores: [
    {
      difficulty: '어려움',
      instrument: '피아노',
      price: '1234',
      profileImg:
        'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
      scoreName: '악보제목123',
      scoreWriter: '악보제작자123',
      scoreId: 15151,
    },
  ],
};
