import { createSlice, Reducer, PayloadAction } from '@reduxjs/toolkit';

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
export type userinfo = string | null | undefined;

export interface Score {
  createdAt: string;
  author: userinfo;
  authorId: userinfo;
  instType: instType;
  difficulty: difficulty;
  sheetType: sheetType;
  price: string;
  youtubeURL?: string;
  detail: string;
  scoreId: string;
}

export interface StateType {
  songId: string;
  albumImg: string;
  songName: string;
  artist: string;
  scores: Score;
}

// initalState 생성
const initialState: StateType = {
  songId: '',
  albumImg: '',
  songName: '',
  artist: '',
  scores: {
    createdAt: new Date().toISOString(),
    author: '',
    authorId: '',
    instType: '',
    difficulty: '',
    sheetType: '',
    price: '',
    youtubeURL: '',
    detail: '',
    scoreId: '',
  },
};

// 슬라이스생성
export const PostSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    setInstType: (state: StateType, action: PayloadAction<instType>) => {
      state.scores.instType = action.payload;
    },
    setDifficulty: (state: StateType, action: PayloadAction<difficulty>) => {
      state.scores.difficulty = action.payload;
    },
    setSheetType: (state: StateType, action: PayloadAction<sheetType>) => {
      state.scores.sheetType = action.payload;
    },
    setSongName: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, songName: action.payload };
      return state;
    },
    setArtist: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, artist: action.payload };
      return state;
    },
    setAlbumImg: (state: StateType, action: PayloadAction<string>) => {
      state = { ...state, albumImg: action.payload };
      return state;
    },
    setPrice: (state: StateType, action: PayloadAction<string>) => {
      state.scores.price = action.payload;
    },
    setURL: (state: StateType, action: PayloadAction<string>) => {
      state.scores.youtubeURL = action.payload;
    },
    setDetail: (state: StateType, action: PayloadAction<string>) => {
      state.scores.detail = action.payload;
    },

    setUserInfo: (state: StateType, action: PayloadAction<userinfo[]>) => {
      (state.scores.author = action.payload[0]),
        (state.scores.authorId = action.payload[1]);
    },
  },
});

// 액션을 export 해준다.
export const {
  setAlbumImg,
  setSongName,
  setArtist,
  setUserInfo,
  setInstType,
  setDifficulty,
  setSheetType,
  setPrice,
  setURL,
  setDetail,
} = PostSlice.actions;

// 슬라이스를 export 해준다.
const PostReducer: Reducer<typeof initialState> = PostSlice.reducer;

export default PostReducer;
