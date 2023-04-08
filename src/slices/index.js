import { configureStore } from '@reduxjs/toolkit';
import animeListReduces from '../slices/animeListSlice.js';

export default configureStore({
  reducer: {
    animeList: animeListReduces,
  },
});
