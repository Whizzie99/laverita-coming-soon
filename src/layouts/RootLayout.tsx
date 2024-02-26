import {Outlet} from 'react-router-dom'
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar/>
      <Outlet />
    </>
  );
}
 
export default RootLayout;