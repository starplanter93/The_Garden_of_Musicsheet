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
MainGridOptions.args = {
  musicData: [
    {
      artist: '윤하',
      scores: [
        {
          difficulty: '어려움',
          instType: '피아노',
          price: '1234',
          profileImg:
            'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
          scoreName: '악보제목123',
          author: '악보제작자123',
          scoreId: 15151,
        },
      ],
      albumImg:
        'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/albumImg1.png?alt=media&token=0c234da0-5b55-4e45-bfd2-1c76daf09b53',
      songName: '사건의 지평선',
      songId: 123,
    },
  ],
};
