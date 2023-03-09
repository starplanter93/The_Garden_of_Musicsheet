import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreInfoAside from './ScoreInfoAside';

export default {
  title: 'Organisms/ScoreInfoAside',
  component: ScoreInfoAside,
} as ComponentMeta<typeof ScoreInfoAside>;

const Template: ComponentStory<typeof ScoreInfoAside> = (args) => (
  <ScoreInfoAside {...args} />
);

export const ScoreInfoAsideOptions = Template.bind({});
ScoreInfoAsideOptions.args = {
  price: '3000',
  author: '97세기타마스터백종원',
  profileImg:
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
};
