import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartHeader from './CartHeader';

export default {
  title: 'Molecules/CartHeader',
  component: CartHeader,
} as ComponentMeta<typeof CartHeader>;

const Template: ComponentStory<typeof CartHeader> = () => <CartHeader />;

export const CartHeaderOptions = Template.bind({});
