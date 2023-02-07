import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

// initalState 타입 정의
interface StateType {
  email?: string;
  password?: string;
}

// initalState 생성
const initialState: StateType = { email: '', password: '' };

// 슬라이스생성
export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    userLoginEmail: (state: StateType, action: PayloadAction<StateType>) => {
      state.email = action.payload.email;
      return state;
    },
    userLoginPassword: (state: StateType, action: PayloadAction<StateType>) => {
      state.password = action.payload.password;
      return state;
    },
  },
});

// 액션을 export 해준다.
export const { userLoginEmail, userLoginPassword } = loginSlice.actions;

// 슬라이스를 export 해준다.
const loginReducer: Reducer<typeof initialState> = loginSlice.reducer;

export default loginReducer;
