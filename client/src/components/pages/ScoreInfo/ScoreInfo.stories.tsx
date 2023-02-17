import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfo from './ScoreInfo';

export default {
  title: 'Pages/ScoreInfo',
  component: ScoreInfo,
} as ComponentMeta<typeof ScoreInfo>;

const Template: ComponentStory<typeof ScoreInfo> = () => <ScoreInfo />;

export const Default = Template.bind({});
