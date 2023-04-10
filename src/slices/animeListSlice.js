import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: '',
  genres: [],
  season: [],
  select: '',
  counter: 0,
};

const animeListSlice = createSlice({
  name: 'aniList',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list += action.payload;
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
} = animeListSlice.actions;

export default animeListSlice.reducer;
