import { createSlice, Reducer, PayloadAction } from '@reduxjs/toolkit';

// initalState 타입 정의

export type instType =
  | '피아노'
  | '일렉 기타'
  | '어쿠스틱 기타'
  | '베이스'
  | '드럼'
  | ''
  | 'piano'
  | 'acoustic'
  | 'drum'
  | 'bass'
  | 'electric';

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
  songName: string;
  artist: string;
  albumImg: string;
}

export interface StateType {
  songId: string;
  albumImg: string;
  songName: string;
  artist: string;
  scores: Score[];
}

// initalState 생성
const initialState: StateType = {
  songId: '',
  albumImg: '',
  songName: '',
  artist: '',
  scores: [
    {
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
      songName: '',
      artist: '',
      albumImg: '',
    },
  ],
};

// 슬라이스생성
export const PostSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    setInstType: (state: StateType, action: PayloadAction<instType>) => {
      state.scores[0].instType = action.payload;
    },
    setDifficulty: (state: StateType, action: PayloadAction<difficulty>) => {
      state.scores[0].difficulty = action.payload;
    },
    setSheetType: (state: StateType, action: PayloadAction<sheetType>) => {
      state.scores[0].sheetType = action.payload;
    },
    setSongName: (state: StateType, action: PayloadAction<string>) => {
      return {
        ...state,
        scores: [{ ...state.scores[0], songName: action.payload }],
        songName: action.payload,
      };
    },
    setArtist: (state: StateType, action: PayloadAction<string>) => {
      return {
        ...state,
        scores: [{ ...state.scores[0], artist: action.payload }],
        artist: action.payload,
      };
    },

    setAlbumImg: (state: StateType, action: PayloadAction<string>) => {
      return {
        ...state,
        scores: [{ ...state.scores[0], albumImg: action.payload }],
        albumImg: action.payload,
      };
    },
    setPrice: (state: StateType, action: PayloadAction<string>) => {
      state.scores[0].price = action.payload;
    },
    setURL: (state: StateType, action: PayloadAction<string>) => {
      state.scores[0].youtubeURL = action.payload;
    },
    setDetail: (state: StateType, action: PayloadAction<string>) => {
      state.scores[0].detail = action.payload;
    },

    setUserInfo: (state: StateType, action: PayloadAction<userinfo[]>) => {
      (state.scores[0].author = action.payload[0]),
        (state.scores[0].authorId = action.payload[1]);
    },
    setScoreId: (state: StateType, action: PayloadAction<string>) => {
      state.scores[0].scoreId = action.payload;
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
  setScoreId,
} = PostSlice.actions;

// 슬라이스를 export 해준다.
const PostReducer: Reducer<typeof initialState> = PostSlice.reducer;

export default PostReducer;
