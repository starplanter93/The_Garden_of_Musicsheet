import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

interface StateType {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  cash: string;
}

const initialState: StateType = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  cash: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userInfo: (state: StateType, action: PayloadAction<StateType>) => {
      state = action.payload;
      return state;
    },
    setUserProfilePicture: (
      state: StateType,
      action: PayloadAction<string>
    ) => {
      state.photoURL = action.payload;
      return state;
    },
    setUserName: (state: StateType, action: PayloadAction<string>) => {
      state.displayName = action.payload;
      return state;
    },
    setCash: (state: StateType, action: PayloadAction<string>) => {
      state.cash = action.payload;
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

export const { userInfo, setUserProfilePicture, setUserName, setCash } =
  userSlice.actions;

const userReducer: Reducer<typeof initialState> = userSlice.reducer;

export default userReducer;
