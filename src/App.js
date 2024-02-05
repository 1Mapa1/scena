import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const App = () => {
  return (
    <div className="App">
      <header className='header'>
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
      <main className='main'>
        <Carousel responsive={responsive}
        infinite>
          <div className='main-div-img'>
            <img
            className='main-img' 
            src='https://artmoskovia.ru/wp-content/uploads/2020/11/107864098_2868691546574202_5147459534630156743_o.jpg'>
            </img>
            <div className='img-text img-first-text'>Щелкунчик</div>
            <div className='img-text img-second-text'>Сказка об удивительно истории мальчика</div>
          </div>
          <div>
            <img
            className='main-img' 
            src='https://artmoskovia.ru/wp-content/uploads/2020/11/107864098_2868691546574202_5147459534630156743_o.jpg'>

            </img>
          </div>
          <div>
            <img
            className='main-img' 
            src='https://artmoskovia.ru/wp-content/uploads/2020/11/107864098_2868691546574202_5147459534630156743_o.jpg'>

            </img>
          </div>
          <div>
            <img
            className='main-img' 
            src='https://artmoskovia.ru/wp-content/uploads/2020/11/107864098_2868691546574202_5147459534630156743_o.jpg'>

            </img>
          </div>
        </Carousel>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
