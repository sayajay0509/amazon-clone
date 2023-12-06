import React from 'react'
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <nav className="header">
    <Link to ="/">
     
        <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="">
            
        </img>

        
        
    
    </Link>
    <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>
    </div>
    
    <div className="header__nav">
        <Link to="/Login" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign In</span>
        </div>
       
        </Link>
        <Link to="/" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
       
        </Link>
        <Link to="/" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
       
        </Link>

        <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__BasketCount">0</span>
            </div>
        </Link>
    </div>
  

    </nav>

   
  )
}

export default Header