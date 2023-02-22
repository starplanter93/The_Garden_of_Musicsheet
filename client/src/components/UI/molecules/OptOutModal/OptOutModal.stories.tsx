import { ComponentMeta, ComponentStory } from '@storybook/react';
import OptOutModal from './OptOutModal';

export default {
  title: 'Molecules/OptOutModal',
  component: OptOutModal,
} as ComponentMeta<typeof OptOutModal>;

const Template: ComponentStory<typeof OptOutModal> = (args) => (
  <OptOutModal {...args} />
);

export const Default = Template.bind({});
