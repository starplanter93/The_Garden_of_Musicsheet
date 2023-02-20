import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfoMain from './ScoreInfoMain';

export default {
  title: 'Organisms/ScoreInfoMain',
  component: ScoreInfoMain,
} as ComponentMeta<typeof ScoreInfoMain>;

const Template: ComponentStory<typeof ScoreInfoMain> = (args) => (
  <ScoreInfoMain {...args} />
);

export const ScoreInfoMainOptions = Template.bind({});
ScoreInfoMainOptions.args = {
  scoreImg1:
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb',
  scoreImg2:
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24',
  instrument: '어쿠스틱 기타',
  difficulty: '어려움',
  page: '7',
  scoreType: '타브 악보',
  scoreExplain: '게시글 등록자가 작성한 악보에 대한 상세한 설명과 정보',
  youtubeURL: 'https://www.youtube.com/watch?v=k3rUzmGK1Hs',
};
