import { ComponentMeta, ComponentStory } from '@storybook/react';
import EditOrDownButton from './EditOrDownButton';

export default {
  title: 'Molecules/EditOrDownButton',
  component: EditOrDownButton,
} as ComponentMeta<typeof EditOrDownButton>;

const Template: ComponentStory<typeof EditOrDownButton> = (args) => (
  <EditOrDownButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  event: 'edit',
};
