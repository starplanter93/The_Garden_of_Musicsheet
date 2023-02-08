import { ComponentMeta, ComponentStory } from '@storybook/react';
import MusicPostInfo from './MusicPostInfo';

export default {
  title: 'Organisms/MusicPostInfo',
  component: MusicPostInfo,
} as ComponentMeta<typeof MusicPostInfo>;

const Template: ComponentStory<typeof MusicPostInfo> = (args) => (
  <MusicPostInfo {...args} />
);

export const SongInfo = Template.bind({});
SongInfo.args = {
  type: '곡 정보',
};
