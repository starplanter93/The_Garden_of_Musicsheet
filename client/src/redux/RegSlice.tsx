import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

// initalState 타입 정의
interface StateType {
  email?: string;
  password?: string;
  nickname?: string;
  passwordCheck?: string;
}

// initalState 생성
const initialState: StateType = {
  email: '',
  password: '',
  passwordCheck: '',
  nickname: '',
};

// 슬라이스생성
export const regSlice = createSlice({
  name: 'regSlice',
  initialState,
  reducers: {
    userRegEmail: (state: StateType, action: PayloadAction<StateType>) => {
      state.email = action.payload.email;
      return state;
    },
    userRegPassword: (state: StateType, action: PayloadAction<StateType>) => {
      state.password = action.payload.password;
      return state;
    },
    userRegPasswordCheck: (
      state: StateType,
      action: PayloadAction<StateType>
    ) => {
      state.passwordCheck = action.payload.passwordCheck;

      return state;
    },
    userRegNickname: (state: StateType, action: PayloadAction<StateType>) => {
      state.nickname = action.payload.nickname;
      return state;
    },
  },
});

// 액션을 export 해준다.
export const {
  userRegEmail,
  userRegPassword,
  userRegPasswordCheck,
  userRegNickname,
} = regSlice.actions;

// 슬라이스를 export 해준다.
const regReducer: Reducer<typeof initialState> = regSlice.reducer;

export default regReducer;
