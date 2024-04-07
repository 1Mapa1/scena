import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import {Header, CarouselPerformance, MinTheater} from '../components';

const representation = [
    {
        img: 'https://www.maly.ru/images/news2/643e757113395.jpg',
        head_text: 'Щелкунчик',
        main_text: 'Сказка об удивительно истории мальчика'
    },
    {
        img: 'https://mo-hamovniki.ru/wp-content/uploads/2017/01/17_gb-300x201.jpg',
        head_text: 'Щелкунчик',
        main_text: 'Сказка об удивительно истории мальчика'
    },
    {
        img: 'https://komiinform.ru/content/news/images/250701/Predloghenie-4_view.jpg',
        head_text: 'Щелкунчик',
        main_text: 'Сказка об удивительно истории мальчика'
    },
    {
        img: 'https://media.etajerka.spb.ru/master-i-ego-masterskaya-2023/master-i-ego-masters/kyle-head-p6rntdapbuk-unsplash-scaled_C2A4ZGW.jpg.2560x1706_q85_box-0%2C0%2C2560%2C1706_crop_detail.jpg',
        head_text: 'Щелкунчик',
        main_text: 'Сказка об удивительно истории мальчика'
    }
]

const min_theater = [1, 2, 3, 4, 5, 6]

const Theaters = () => {
    return (
        <div>
          <Header />
          <main className='main'>
            <CarouselPerformance
                representation={representation}
            />
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
                {min_theater.map((theater, index) => 
                    <MinTheater 
                        key={index}
                        main_text='Государственный академический Большой театр России (Историческая сцена)'
                        year='Год: 1899'
                        desription='Великий театр великого актера победивший все свои страхи и открывшись собственную школу театрального искуства которая бударажит умы милионнов'
                        backgroundImage='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moscow-Bolshoi-Theare-1.jpg/274px-Moscow-Bolshoi-Theare-1.jpg'
                    />
                )}
              </div>
            </div>
          </main>
          <footer></footer>
        </div>
      );
}
export default Theaters;