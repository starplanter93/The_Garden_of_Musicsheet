import { createSlice, Reducer } from '@reduxjs/toolkit';

interface StateType {
  isCartModalOpened: boolean;
}

const initialState: StateType = { isCartModalOpened: false };

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openCartModal: (state: StateType) => {
      const newState = { ...state };
      newState.isCartModalOpened = true;
      return newState;
    },
    closeCartModal: (state: StateType) => {
      const newState = { ...state };
      newState.isCartModalOpened = false;
      return newState;
    },
    cartModalHandler: (state: StateType) => {
      const newState = { ...state };
      newState.isCartModalOpened = !newState.isCartModalOpened;
      return newState;
    },
  },
});

export const { openCartModal, closeCartModal, cartModalHandler } =
  modalSlice.actions;

const modalReducer: Reducer<typeof initialState> = modalSlice.reducer;

export default modalReducer;
