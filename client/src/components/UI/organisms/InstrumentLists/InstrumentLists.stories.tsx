import { ComponentMeta, ComponentStory } from '@storybook/react';
import InstrumentListss from './InstrumentLists';

export default {
  title: 'Organisms/InstrumentLists',
  component: InstrumentListss,
} as ComponentMeta<typeof InstrumentListss>;

const Template: ComponentStory<typeof InstrumentListss> = (args) => (
  <InstrumentListss {...args} />
);

export const InstrumentLists = Template.bind({});

// Todo: 추후 props 형식에 따라 변경 예정
InstrumentLists.args = {
  arraylength: 6,
};
