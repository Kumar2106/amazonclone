import React from 'react'
import "./Header.css"
import {Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();
    const login = () =>{
        if (user) {
            auth.signOut();
        } 
    }
    return (
        <nav className="header">


        <Link to= "/">
         <img 
         className="header__logo" 
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
         alt=""
         />
         </Link>

        <div className="header__search">
        <input
        type="text"
        className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">

        {/* 1st link for the login page */}
        <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
        <span className="header__optionLineOne">hello </span>
    <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign in'}</span>
        </div>
        </Link>

         {/* 2nd link for the login page */}

        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">&orders</span>
            </div>
        </Link>

         {/* 3rd link for the login page */}

         <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </Link>


        {/* 4th link for the Checkout page */}
        

        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>


        </div>


        </nav>
    )
}

export default Header
