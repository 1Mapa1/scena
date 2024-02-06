import React from 'react';
import { FaSearch, FaChevronRight } from 'react-icons/fa';
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
            src='https://www.maly.ru/images/news2/643e757113395.jpg'>
            </img>
            <div className='img-text img-first-text'>Щелкунчик</div>
            <div className='img-text img-second-text'>Сказка об удивительно истории мальчика</div>
          </div>
          <div className='main-div-img'>
            <img
            className='main-img' 
            src='https://mo-hamovniki.ru/wp-content/uploads/2017/01/17_gb-300x201.jpg'>
              
            </img>
            <div className='img-text img-first-text'>Щелкунчик</div>
            <div className='img-text img-second-text'>Сказка об удивительно истории мальчика</div>
          </div>
          <div className='main-div-img'>
            <img
            className='main-img' 
            src='https://komiinform.ru/content/news/images/250701/Predloghenie-4_view.jpg'>

            </img>
            <div className='img-text img-first-text'>Щелкунчик</div>
            <div className='img-text img-second-text'>Сказка об удивительно истории мальчика</div>
          </div>
          <div className='main-div-img'>
            <img
            className='main-img' 
            src='https://media.etajerka.spb.ru/master-i-ego-masterskaya-2023/master-i-ego-masters/kyle-head-p6rntdapbuk-unsplash-scaled_C2A4ZGW.jpg.2560x1706_q85_box-0%2C0%2C2560%2C1706_crop_detail.jpg'>

            </img>
            <div className='img-text img-first-text'>Щелкунчик</div>
            <div className='img-text img-second-text'>Сказка об удивительно истории мальчика</div>
          </div>
        </Carousel>

        <div className='main-theaters'>
          <h1 className='main-theaters-text'>Наши театры</h1>
          <div className='main-theaters-filter'>
            <div className='filter-button active multi'>
              <div className='white-filter'>
                Все
              </div>
              <FaChevronRight className='white-filter filter-arrow'></FaChevronRight>
            </div>
            <div className='filter-button'>
                Драма
            </div>
            <div className='filter-button'>
                Комедия
            </div>
            <div className='filter-button'>
                Еще-то
            </div>
          </div>

          <div className='main-theater-grid'>
            <div className='theater'>
              <div className='theater-name'>
                Государственный академический Большой театр России (Историческая сцена)
              </div>
              <div className='theater-year'>
                Год: 1899 
              </div>
              <div className='theater-discription'>
                Великий театр великого актера победивший все свои страхи и открывшись собственную школу театрального искуства которая бударажит умы милионнов 
              </div>
            </div>
            <div className='theater'>
              <div className='theater-name'>
                Государственный академический Большой театр России (Историческая сцена)
              </div>
              <div className='theater-year'>
                Год: 1899 
              </div>
              <div className='theater-discription'>
                Великий театр великого актера победивший все свои страхи и открывшись собственную школу театрального искуства которая бударажит умы милионнов 
              </div>
            </div>
            <div className='theater'>
              <div className='theater-name'>
                Государственный академический Большой театр России (Историческая сцена)
              </div>
              <div className='theater-year'>
                Год: 1899 
              </div>
              <div className='theater-discription'>
                Великий театр великого актера победивший все свои страхи и открывшись собственную школу театрального искуства которая бударажит умы милионнов 
              </div>
            </div>
            <div className='theater'>
              <div className='theater-name'>
                Государственный академический Большой театр России (Историческая сцена)
              </div>
              <div className='theater-year'>
                Год: 1899 
              </div>
              <div className='theater-discription'>
                Великий театр великого актера победивший все свои страхи и открывшись собственную школу театрального искуства которая бударажит умы милионнов 
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
