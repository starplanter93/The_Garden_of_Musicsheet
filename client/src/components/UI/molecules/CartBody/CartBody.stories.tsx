import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartBody from './CartBody';

export default {
  title: 'Molecules/CartBody',
  component: CartBody,
} as ComponentMeta<typeof CartBody>;

const Template: ComponentStory<typeof CartBody> = ({
  cartItems,
  setCartItems,
}) => <CartBody cartItems={cartItems} setCartItems={setCartItems} />;

export const CartHeaderOptions = Template.bind({});
