import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: '',
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
  },
});

export const { setList, setSelect, setCounter } = animeListSlice.actions;

export default animeListSlice.reducer;
