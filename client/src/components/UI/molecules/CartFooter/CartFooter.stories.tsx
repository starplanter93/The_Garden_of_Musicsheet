import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartFooter from './CartFooter';

export default {
  title: 'Molecules/CartFooter',
  component: CartFooter,
} as ComponentMeta<typeof CartFooter>;

const Template: ComponentStory<typeof CartFooter> = ({ cartItems }) => (
  <CartFooter cartItems={cartItems} />
);

export const CartHeaderOptions = Template.bind({});
