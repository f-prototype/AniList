import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genres: ['action'],
  season: ['winter'],
  select: {},
  age: '',
  sort: 'popularityRank',
  user: {},
};

const animeListSlice = createSlice({
  name: 'aniList',
  initialState,
  reducers: {
    pushInState: (state, action) => {
      const { name, value } = action.payload;
      state[name].push(value);
    },
    removeFromState: (state, action) => {
      const { name, value } = action.payload;
      state[name] = state[name].filter((elem) => elem !== value);
    },
    resetState: (state) => (state = initialState),
    setState: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { resetState, setState, pushInState, removeFromState } =
  animeListSlice.actions;

export default animeListSlice.reducer;
