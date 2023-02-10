import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

interface StateType {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
}

const initialState: StateType = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userInfo: (state: StateType, action: PayloadAction<StateType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { userInfo } = userSlice.actions;

const userReducer: Reducer<typeof initialState> = userSlice.reducer;

export default userReducer;
