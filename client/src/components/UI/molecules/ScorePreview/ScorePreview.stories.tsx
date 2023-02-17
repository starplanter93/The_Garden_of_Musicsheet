import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScorePreview from './ScorePreview';

export default {
  title: 'Molecules/ScorePreview',
  component: ScorePreview,
} as ComponentMeta<typeof ScorePreview>;

const Template: ComponentStory<typeof ScorePreview> = (args) => (
  <ScorePreview {...args} />
);

export const ScorePreviewOptions = Template.bind({});
ScorePreviewOptions.args = {
  scoreImg1:
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb',
  scoreImg2:
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24',
};
