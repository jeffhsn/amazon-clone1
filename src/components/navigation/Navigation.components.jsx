import React from 'react';
import './Navigation.styles.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Outlet } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

const Navigation = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <div className="navbar">
        <img
          className="nav__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />

        <div className="nav__search">
          <input className="nav__searchInput" type="text" />
          <SearchIcon className="nav__searchIcon" />
        </div>

        <div className="nav__options">
          <div className="nav__option">
            <span className="nav__optionLineOne">Hello Guest</span>
            <span className="nav__optionLineTwo">Sign In</span>
          </div>

          <div className="nav__option">
            <span className="nav__optionLineOne">Returns</span>
            <span className="nav__optionLineTwo">& Orders</span>
          </div>

          <div className="nav__option">
            <span className="nav__optionLineOne">Your</span>
            <span className="nav__optionLineTwo">Prime</span>
          </div>

          <div className="nav__optionBasket">
            <ShoppingBasketIcon />
            <span className="nav__optionLineTwo nav__basketCount">
              {basket.length}
            </span>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
