// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';

export const store = configureStore({
  reducer: { userInfo: loginReducer },

  devTools: true, // 개발자도구 설정
});

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;
