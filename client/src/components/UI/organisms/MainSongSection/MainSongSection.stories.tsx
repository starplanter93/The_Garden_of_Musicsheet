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
