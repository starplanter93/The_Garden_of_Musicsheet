// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './LoginSlice';
import regReducer from './RegSlice';
import userReducer from './UserSlice';
import HeaderReducer from './HeaderSlice';

const persistConfig = {
  // storage에 저장할 명칭
  key: 'user',
  // 저장할 storage 종류, 로컬스토리지는 'storage'
  storage,
  // 로컬스토리지에 저장할 reducer
  // whitelist: ['userReducer'],
  // blacklist: 제외할 reducer
};

const reducers = combineReducers({ userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    regInfo: regReducer,
    userLoginInput: loginReducer,
    postHeader: HeaderReducer,
    defaultHeader: HeaderReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // 직렬화 검사X
      serializableCheck: false,
    }),

  devTools: true, // 개발자도구 설정
});

export const persistor = persistStore(store);

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;
