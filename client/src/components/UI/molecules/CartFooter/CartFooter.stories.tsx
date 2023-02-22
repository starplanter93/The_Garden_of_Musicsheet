import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartFooter from './CartFooter';

export default {
  title: 'Molecules/CartFooter',
  component: CartFooter,
} as ComponentMeta<typeof CartFooter>;

const Template: ComponentStory<typeof CartFooter> = () => <CartFooter />;

export const CartHeaderOptions = Template.bind({});
