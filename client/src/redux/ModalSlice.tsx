import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { ScoreInfoType } from '../components/pages/Main/Main';

export interface CartStateType {
  isCartModalOpened: boolean;
  cartItems: ScoreInfoType[];
  countCartItems: number;
}

const initialState: CartStateType = {
  isCartModalOpened: false,
  // albumImg: '',
  // artist: '',
  // author: '',
  // authorId: '',
  // author_profile: '',
  // createdAt: '',
  // detail: '',
  // difficulty: '',
  // downloadURL: '',
  // instType: '',
  // price: '',
  // scoreId: '',
  // scoreName: '',
  // sheetType: '',
  // songName: '',
  // youtubeURL: '',
  cartItems: [],
  countCartItems: 0,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    cartModalHandler: (state: CartStateType) => {
      const newState = { ...state };
      newState.isCartModalOpened = !newState.isCartModalOpened;
      return newState;
    },
    countCartItem(state: CartStateType, action: PayloadAction<number>) {
      state.countCartItems = action.payload;
    },
    updateCartItems(
      state: CartStateType,
      action: PayloadAction<ScoreInfoType>
    ) {
      // 중복 데이터 처리를 위해 아래 코드 사용.
      // // 아래 코드를 사용하면 redux가 forEach에 접근을 못함
      // const newState = state.cartItems.forEach((cartItem) => {
      //   if (cartItem.scoreName !== action.payload.scoreName) {
      //     state.cartItems.push(action.payload);
      //   }
      // });
      // // newState.cartItems.push(action.payload);
      // return newState;

      // // 아래 코드처럼 작성해야 redux가 바르게 작동함
      // const scoreInfo = action.payload;
      // const existingItem = state.cartItems.find(
      //   (item) => item.scoreName === scoreInfo.scoreName
      // );
      // if (existingItem) {
      //   return state;
      // }
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, scoreInfo],
      // };

      // 하지만 redux에서 중복을 감지하는 로직을 작성해버리면 사용자에게 중복데이터가 추가되었을 때,
      // 알림을 주기 쉽지않음.
      // 그러므로 redux에서는 업데이트 로직만 사용하고, 중복체크는 이를 사용하는 컴포넌트에서 하는게 맞는 듯.
      state.cartItems.push(action.payload);
    },

    // // filter을 사용하면 새 배열이 리턴됨. 이 새 배열을 state에 추가해서 리턴해줘야 올바르게 작동.
    // // 따라서 아래 코드는 제대로 작동안함.
    // deleteCartItem(state: CartStateType, action: PayloadAction<string>) {
    //   state.cartItems.filter((cartItem) => {
    //     return cartItem.scoreName !== action.payload;
    //   });
    // },
    deleteCartItem(state: CartStateType, action: PayloadAction<string>) {
      const scoreNameToDelete = action.payload;
      const newCartItems = state.cartItems.filter((cartItem) => {
        return cartItem.scoreName !== scoreNameToDelete;
      });
      return {
        ...state,
        cartItems: newCartItems,
      };
    },
  },
});

export const {
  cartModalHandler,
  countCartItem,
  updateCartItems,
  deleteCartItem,
} = modalSlice.actions;

const modalReducer: Reducer<typeof initialState> = modalSlice.reducer;

export default modalReducer;
