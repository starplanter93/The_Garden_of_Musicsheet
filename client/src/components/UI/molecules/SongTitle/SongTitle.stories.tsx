import { ComponentMeta, ComponentStory } from '@storybook/react';
import SongTitle from './SongTitle';

export default {
  title: 'Molecules/SongTitle',
  component: SongTitle,
} as ComponentMeta<typeof SongTitle>;

const Template: ComponentStory<typeof SongTitle> = (args) => (
  <SongTitle {...args} />
);

export const SongTitleOptions = Template.bind({});
SongTitleOptions.args = {
  songTitle: '노래제목',
  singer: '가수',
};
