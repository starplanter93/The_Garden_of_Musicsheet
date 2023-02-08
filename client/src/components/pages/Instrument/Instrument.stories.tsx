import { ComponentMeta, ComponentStory } from '@storybook/react';
import Instrument from './Instrument';

export default {
  title: 'Pages/Instrument',
  component: Instrument,
} as ComponentMeta<typeof Instrument>;

const Template: ComponentStory<typeof Instrument> = () => <Instrument />;

export const Default = Template.bind({});
