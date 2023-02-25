import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const footerSlice = createSlice({
  name: 'footerSlice',
  initialState: false,
  reducers: {
    showFooter: (state: boolean, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { showFooter } = footerSlice.actions;

const footerReducer = footerSlice.reducer;
export default footerReducer;
