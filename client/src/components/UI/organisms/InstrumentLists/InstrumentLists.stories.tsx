import { ComponentMeta, ComponentStory } from '@storybook/react';
import InstrumentLists from './InstrumentLists';

export default {
  title: 'Organisms/InstrumentLists',
  component: InstrumentLists,
} as ComponentMeta<typeof InstrumentLists>;

const Template: ComponentStory<typeof InstrumentLists> = () => (
  <InstrumentLists />
);

export const Default = Template.bind({});
