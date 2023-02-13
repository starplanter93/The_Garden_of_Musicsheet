import { createSlice, Reducer, PayloadAction } from '@reduxjs/toolkit';
import { auth } from '../firebase/firebase';

// initalState 타입 정의

export type instType =
  | '피아노'
  | '일렉 기타'
  | '어쿠스틱 기타'
  | '베이스'
  | '드럼'
  | '';

export type difficulty = '쉬움' | '중간' | '어려움' | '';
export type sheetType = '단선 악보' | '타브 악보' | '';

interface StateType {
  author: string | null | undefined;
  authorId: string | null | undefined;
  instType: instType;
  difficulty: difficulty;
  sheetType: sheetType;
  songName: string;
  artist: string;
  price: string;
  youtubeURL?: string;
  detail: string;
}

// initalState 생성
const initialState: StateType = {
  author: auth.currentUser?.displayName,
  authorId: auth.currentUser?.uid,
  instType: '',
  difficulty: '',
  sheetType: '',
  songName: '',
  artist: '',
  price: '',
  youtubeURL: '',
  detail: '',
};

// 슬라이스생성
export const PostSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    setInstType: (state: StateType, action: PayloadAction<instType>) => {
      state = { ...state, instType: action.payload };
      return state;
    },
    setDifficulty: (state: StateType, action: PayloadAction<difficulty>) => {
      state = { ...state, difficulty: action.payload };
      return state;
    },
    setSheetType: (state: StateType, action: PayloadAction<sheetType>) => {
      state = { ...state, sheetType: action.payload };
      return state;
    },
    setSongName: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, songName: action.payload };
      return state;
    },
    setArtist: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, artist: action.payload };
      return state;
    },
    setPrice: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, price: action.payload };
      return state;
    },
    setURL: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, youtubeURL: action.payload };
      return state;
    },
    setDetail: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, detail: action.payload };
      return state;
    },
  },
});

// 액션을 export 해준다.
export const {
  setInstType,
  setDifficulty,
  setSheetType,
  setSongName,
  setArtist,
  setPrice,
  setURL,
  setDetail,
} = PostSlice.actions;

// 슬라이스를 export 해준다.
const PostReducer: Reducer<typeof initialState> = PostSlice.reducer;

export default PostReducer;
