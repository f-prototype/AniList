import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './slices/index';
import App from './App';
import './index.css';

// let a;
// let arr = [];
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
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

// fetch(
//   'https://kitsu.io/api/edge/anime/1/episodes?page%5Blimit%5D=20&page%5Boffset%5D=0'
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result));
// fetch('https://kitsu.io/api/edge/anime/11157/genres')
//   .then((response) => response.json())
//   .then((result) => console.log(result));
