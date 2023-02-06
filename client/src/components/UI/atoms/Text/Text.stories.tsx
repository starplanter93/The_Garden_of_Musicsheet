import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const FontOptions = Template.bind({});
FontOptions.args = {
  size: 'm',
  weight: 'regular',
  color: 'black',
  children: 'Text',
};
