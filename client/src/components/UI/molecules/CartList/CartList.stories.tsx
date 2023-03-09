import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartList from './CartList';

export default {
  title: 'Molecules/CartList',
  component: CartList,
} as ComponentMeta<typeof CartList>;

const Template: ComponentStory<typeof CartList> = ({
  scoreName,
  artist,
  author,
  price,
  scoreId,
  setCartItems,
}) => (
  <CartList
    scoreName={scoreName}
    artist={artist}
    author={author}
    price={price}
    scoreId={scoreId}
    setCartItems={setCartItems}
  />
);

export const CartHeaderOptions = Template.bind({});
