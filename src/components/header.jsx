import React from "react";
import { FaSearch } from 'react-icons/fa';


const Header = () => {
    return (
        <header className='header main-padding'>
            <div className='logo'>
              <p className='header-text'>Сцена</p>
            </div>
            <div className='search'>
              <FaSearch className="search-icon" />
              <input
                className='search-input'
                type="text"
                placeholder="Поиск..."
              />
            </div>
            <div className='utils'>
              <a href='#' className='header-link'>Театры</a>
              <a href='#' className='header-link'>Молодеж</a>
              <a href='#' className='header-link'>Войти</a>
            </div>
        </header>
    );
}

export default Header;