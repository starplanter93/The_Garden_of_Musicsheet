import { ComponentMeta, ComponentStory } from '@storybook/react';
import MusicDetail from './MusicDetail';

export default {
  title: 'Pages/MusicDetail',
  component: MusicDetail,
} as ComponentMeta<typeof MusicDetail>;

const Template: ComponentStory<typeof MusicDetail> = () => <MusicDetail />;

export const Default = Template.bind({});
