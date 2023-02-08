import { ComponentMeta, ComponentStory } from '@storybook/react';
import InstrumentCard from './InstrumentCard';

export default {
  title: 'Molecules/InstrumentCard',
  component: InstrumentCard,
} as ComponentMeta<typeof InstrumentCard>;

const Template: ComponentStory<typeof InstrumentCard> = (args) => (
  <InstrumentCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  type: 'piano',
  sheets: '13',
};
