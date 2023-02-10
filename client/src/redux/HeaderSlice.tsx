import { createSlice, Reducer, PayloadAction } from '@reduxjs/toolkit';

// initalState 타입 정의
interface StateType {
  isPost: boolean;
}

// initalState 생성
const initialState: StateType = { isPost: false };

// 슬라이스생성
export const HeaderSlice = createSlice({
  name: 'headerSlice',
  initialState,
  reducers: {
    setHeader: (state: StateType, action: PayloadAction<boolean>) => {
      return { ...state, isPost: action.payload };
    },
  },
});

// 액션을 export 해준다.
export const { setHeader } = HeaderSlice.actions;

// 슬라이스를 export 해준다.
const HeaderReducer: Reducer<typeof initialState> = HeaderSlice.reducer;

export default HeaderReducer;
