import { ComponentMeta, ComponentStory } from '@storybook/react';
import InstrumentDetail from './InstrumentDetail';

export default {
  title: 'Pages/InstrumentDetail',
  component: InstrumentDetail,
} as ComponentMeta<typeof InstrumentDetail>;

const Template: ComponentStory<typeof InstrumentDetail> = () => (
  <InstrumentDetail />
);

export const Default = Template.bind({});
