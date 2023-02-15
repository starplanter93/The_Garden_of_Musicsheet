import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextEditor from './TextEditor';

export default {
  title: 'Molecules/TextEditor',
  component: TextEditor,
} as ComponentMeta<typeof TextEditor>;

const Template: ComponentStory<typeof TextEditor> = (args) => (
  <TextEditor {...args} />
);

export const Default = Template.bind({});
