import { ComponentMeta, ComponentStory } from '@storybook/react';
import InstrumentCards from './InstrumentCard';

export default {
  title: 'Molecules/InstrumentCard',
  component: InstrumentCards,
} as ComponentMeta<typeof InstrumentCards>;

const Template: ComponentStory<typeof InstrumentCards> = (args) => (
  <InstrumentCards {...args} />
);

export const InstrumentCard = Template.bind({});
InstrumentCard.args = {
  src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  type: '피아노',
  sheets: '13',
};
