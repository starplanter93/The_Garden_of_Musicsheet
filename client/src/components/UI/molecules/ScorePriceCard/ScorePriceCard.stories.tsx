import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScorePriceCard from './ScorePriceCard';

export default {
  title: 'Molecules/ScorePriceCard',
  component: ScorePriceCard,
} as ComponentMeta<typeof ScorePriceCard>;

const Template: ComponentStory<typeof ScorePriceCard> = (args) => (
  <ScorePriceCard {...args} />
);

export const ScorePriceCardOptions = Template.bind({});
ScorePriceCardOptions.args = {
  price: '3000',
};
