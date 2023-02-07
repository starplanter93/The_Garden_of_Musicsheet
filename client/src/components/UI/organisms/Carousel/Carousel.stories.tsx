import { ComponentMeta, ComponentStory } from '@storybook/react';
import Carousel from './Carousel';

export default {
  title: 'Organisms/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = () => <Carousel />;

export const CarouselOptions = Template.bind({});
