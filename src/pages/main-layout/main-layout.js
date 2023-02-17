import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/main-navigation/main-navigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
