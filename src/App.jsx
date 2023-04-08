import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimePage } from './components/anime-page/AnimePage';
import { MainPage } from './components/main-page/MainPage';
import Layout from './layout/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path=":slug" element={<AnimePage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
