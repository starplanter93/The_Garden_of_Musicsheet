import { ComponentMeta, ComponentStory } from '@storybook/react';
import SongInfoHeader from './SongInfoHeader';

export default {
  title: 'Molecules/SongInfoHeader',
  component: SongInfoHeader,
} as ComponentMeta<typeof SongInfoHeader>;

const Template: ComponentStory<typeof SongInfoHeader> = (args) => (
  <SongInfoHeader {...args} />
);

export const SongInfoHeaderOptions = Template.bind({});
SongInfoHeaderOptions.args = {
  scoreName: '악보 제목',
  singer: '가수',
  date: '작성일',
};
