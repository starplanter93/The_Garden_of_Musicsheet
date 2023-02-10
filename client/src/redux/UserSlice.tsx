import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

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
  // initialState로 초기화
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      initialState;
      localStorage.removeItem('authorization');
      localStorage.removeItem('refresh');
    });
  },
});

export const { userInfo } = userSlice.actions;

const userReducer: Reducer<typeof initialState> = userSlice.reducer;

export default userReducer;
