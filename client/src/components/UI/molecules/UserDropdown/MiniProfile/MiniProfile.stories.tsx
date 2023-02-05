import { ComponentMeta, ComponentStory } from '@storybook/react';
import MiniProfiles from './MiniProfile';

export default {
  title: 'Molecules/UserDropdown',
  component: MiniProfiles,
} as ComponentMeta<typeof MiniProfiles>;

const Template: ComponentStory<typeof MiniProfiles> = () => <MiniProfiles />;

export const MiniProfile = Template.bind({});
