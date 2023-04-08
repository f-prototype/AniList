import { Outlet } from 'react-router-dom';
import { MyHeader } from '../components/header/MyHeader';
import { Myfooter } from '../components/footer/Myfooter';

export const MainLayout = () => {
  return (
    <>
      <MyHeader />
      <main>
        <Outlet />
      </main>
      <Myfooter />
    </>
  );
};
export default MainLayout;
