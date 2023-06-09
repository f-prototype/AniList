import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './slices/index';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

//ВСЕ КАТЕГОРИИ

// fetch(
//   'https://kitsu.io/api/edge/categories?page%5Blimit%5D=218&page%5Boffset%5D=0'
// )
//   .then((response) => response.json())
//   .then((result) => {
//     a = result.data;
//     console.log(result);
//   });
// .then((result) => {
//   a.map((el) => {
//     arr.push(el.attributes.title);
//   });
//   arr.sort();
//   console.log(arr);
// });

//ФИЛЬТРАЦИЯ КАТЕГОРИЙ

// fetch('https://kitsu.io/api/edge/media-reactions?filter%5BuserId%5D=94252')
//   .then((response) => response.json())
//   .then((result) => console.log(result));
// fetch('https://kitsu.io/api/edge/anime/11157/genres')
//   .then((response) => response.json())
//   .then((result) => console.log(result));
