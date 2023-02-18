import { ComponentMeta, ComponentStory } from '@storybook/react';
import TabMenu from './TabMenu';

export default {
  title: 'Molecules/TabMenu',
  component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = (args) => (
  <TabMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabGroupArr: [
    '전체',
    '피아노',
    '일렉 기타',
    '어쿠스틱 기타',
    '베이스',
    '드럼',
  ],
};
