import { createSlice, Reducer } from '@reduxjs/toolkit';

interface StateType {
  isCartModalOpen: boolean;
}

const initialState: StateType = { isCartModalOpen: false };

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openCartModal: (state: StateType) => {
      const newState = { ...state };
      newState.isCartModalOpen = true;
      return newState;
    },
    closeCartModal: (state: StateType) => {
      const newState = { ...state };
      newState.isCartModalOpen = false;
      return newState;
    },
    cartModalHandler: (state: StateType) => {
      const newState = { ...state };
      newState.isCartModalOpen = !newState.isCartModalOpen;
      return newState;
    },
  },
});

export const { openCartModal, closeCartModal, cartModalHandler } =
  modalSlice.actions;

const modalReducer: Reducer<typeof initialState> = modalSlice.reducer;

export default modalReducer;
