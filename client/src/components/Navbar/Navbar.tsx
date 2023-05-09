import React from 'react';
import store, {
  UserState,
  selectCart,
  selectUser,
  auth,
  logout,
} from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import TurtleLogo from './TurtleLogo.png';
import { FaInfoCircle, FaShoppingCart, FaStore } from 'react-icons/fa';
import { Logo, NavList, SiteName } from './NavbarData';
import { type NavProps } from '../../global';

const navProps: NavProps[] = [
  {
    icon: <FaStore />,
    name: 'Sell Product',
    path: '/ProductPage',
  },
  {
    icon: <FaInfoCircle />,
    name: 'About Us',
    path: '/AboutPage',
  },
  {
    icon: <FaShoppingCart />,
    name: 'Cart',
    path: '/CheckoutPage',
  },
];

export function Navbar(): JSX.Element {
  const username = useSelector(selectUser);

  return (
    <nav className="Navbar">
      <div className="flex justify-between gap-4 p-4">
        <div className="flex items-center gap-6">
          <Logo
            image={<img src={TurtleLogo} alt="Turtle Logo" />}
            path={'/HomePage'}
          />
          <SiteName name={'IndigoList'} path={'/HomePage'} />
        </div>
        <div className="mr-24 flex items-center">
          <NavList items={navProps} />
        </div>
      </div>
    </nav>
  );
}
