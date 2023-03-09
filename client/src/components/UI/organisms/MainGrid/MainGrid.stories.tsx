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
      albumImg:
        'https://i.scdn.co/image/ab67616d0000b273182cbc21b48737ef5def008e',
      artist: '검정치마',
      isDeleted: false,
      scores: [
        {
          albumImg:
            'https://i.scdn.co/image/ab67616d0000b273182cbc21b48737ef5def008e',
          artist: '검정치마',
          author: '짱준일',
          authorId: '0n6e1IZylLc0P7g4AftUJhA18BZ2',
          author_profile:
            'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/profile%2F0n6e1IZylLc0P7g4AftUJhA18BZ2%2FIMG_5895.jpg?alt=media&token=b13b6a16-2be3-41d0-a7f1-cd90fc143ace',
          createdAt: '2023-02-28T08:44:56.793Z',
          detail: '<p>테스트</p>',
          difficulty: '쉬움',
          downloadURL:
            'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/pdf%2FGuitar_Pro_-_Cyberpunk_-_i_really_want_to_stay_at_your_house.pdf?alt=media&token=c9dc0917-c331-4f6a-b1c0-e422b082c052',
          instType: '어쿠스틱 기타',
          isDeleted: false,
          isOptout: false,
          price: '5500',
          scoreId: '22',
          scoreName: '기다린 만큼, 더 - 어쿠스틱 기타 커버',
          sheetType: '타브 악보',
          songName: 'Till The End of Time',
          youtubeURL: 'https://youtu.be/ItAXIBzMxn8',
        },
      ],
      songId: 12,
      songName: 'Till The End of Time',
    },
  ],
};
