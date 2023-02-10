/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_SECRET: string;
    REACT_APP_CLIENT: string;
    REACT_APP_REFRESH: string;
    REACT_APP_BASIC: string;
  }
}
