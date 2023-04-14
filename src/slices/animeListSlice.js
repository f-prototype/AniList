import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  genres: ['action'],
  season: ['winter'],
  select: '',
  counter: 0,
  age: '',
  sort: 'popularityRank',
};

const animeListSlice = createSlice({
  name: 'aniList',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setSelect: (state, action) => {
      state.select = action.payload;
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
    setGenres: (state, action) => {
      state.genres.push(action.payload);
    },
    removeGenre: (state, action) => {
      state.genres = state.genres.filter((genre) => genre !== action.payload);
    },
    setSeason: (state, action) => {
      state.season.push(action.payload);
    },
    removeSeason: (state, action) => {
      state.season = state.season.filter((genre) => genre !== action.payload);
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    reset: (state) => {
      state.genres = ['action'];
      state.season = ['winter'];
      state.age = '';
      state.sort = 'popularityRank';
    },
  },
});

export const {
  setList,
  setSelect,
  setCounter,
  setGenres,
  removeGenre,
  setSeason,
  removeSeason,
  setAge,
  setSort,
  reset,
} = animeListSlice.actions;

export default animeListSlice.reducer;
