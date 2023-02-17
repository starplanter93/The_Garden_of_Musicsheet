import { createSlice, Reducer, PayloadAction } from '@reduxjs/toolkit';

// initalState 타입 정의

interface PDF {
  name: string;
}

interface StateType {
  pdf: PDF;
}

// initalState 생성
const initialState: StateType = { pdf: { name: '' } };

// 슬라이스생성
export const FileSlice = createSlice({
  name: 'fileSlice',
  initialState,
  reducers: {
    setFile: (state: StateType, action: PayloadAction<PDF>) => {
      state.pdf = action.payload;
      return state;
    },
  },
});

// 액션을 export 해준다.
export const { setFile } = FileSlice.actions;

// 슬라이스를 export 해준다.
const FileReducer: Reducer<typeof initialState> = FileSlice.reducer;

export default FileReducer;
