import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartList from './CartList';

export default {
  title: 'Molecules/CartList',
  component: CartList,
} as ComponentMeta<typeof CartList>;

const Template: ComponentStory<typeof CartList> = () => <CartList />;

export const CartHeaderOptions = Template.bind({});
