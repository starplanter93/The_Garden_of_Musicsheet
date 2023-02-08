import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
// 나중에 유저 정보를 저장할 때 사용할 용도 지금은 사용 X

// initalState 타입 정의
interface StateType {
  username: string;
}

// initalState 생성
const initialState: any = '';

// 슬라이스생성
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userInfo: (state: any, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    },
  },
});

// 액션을 export 해준다.
export const { userInfo } = userSlice.actions;

// 슬라이스를 export 해준다.
const userReducer: Reducer<typeof initialState> = userSlice.reducer;

export default userReducer;
