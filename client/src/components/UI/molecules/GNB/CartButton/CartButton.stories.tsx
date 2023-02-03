import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartButtons from './CartButton';

export default {
  title: 'Molecules/GNB',
  component: CartButtons,
} as ComponentMeta<typeof CartButtons>;

const Template: ComponentStory<typeof CartButtons> = () => <CartButtons />;

export const CartButton = Template.bind({});
