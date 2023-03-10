import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartFooter from './CartFooter';

export default {
  title: 'Molecules/CartFooter',
  component: CartFooter,
} as ComponentMeta<typeof CartFooter>;

const Template: ComponentStory<typeof CartFooter> = ({
  cartItems,
  setCartItems,
}) => <CartFooter cartItems={cartItems} setCartItems={setCartItems} />;

export const CartHeaderOptions = Template.bind({});
CartHeaderOptions.args = {
  cartItems: [
    {
      albumImg: '',
      artist: '',
      author: '',
      authorId: '',
      author_profile: '',
      createdAt: '',
      detail: '',
      difficulty: '',
      downloadURL: '',
      instType: '',
      price: '',
      scoreId: '',
      scoreName: '',
      sheetType: '',
      songName: '',
      youtubeURL: '',
      isDeleted: false,
      isOptout: false,
    },
  ],
};
