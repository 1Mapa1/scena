import React, { useState, useEffect, useRef } from 'react';
import {Header, CarouselTheater, MinTheater} from '../components';
import { Tabs, Tab, Container } from 'react-bootstrap';

const representation = [
  {
      img: 'https://www.maly.ru/images/news2/643e757113395.jpg'
  },
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Golden_Mask_2014_photographer_Dmitriy_Dubinskiy.jpg/385px-Golden_Mask_2014_photographer_Dmitriy_Dubinskiy.jpg'
  },
  {
      img: 'https://tildacdn.fomotix.com/media/1380074/tild3530-3261-4639-a235-353835663336/___.jpg'
  },
  {
      img: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/537c2a4576d155fef6140f99698e4b47/'
  }
]

const min_theater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Theater = () => {
  const [key, setKey] = useState('home');
  const tabsWrapperRef = useRef(null); // Изменим на wrapperRef
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    // Убедимся, что обертка существует и после рендеринга компонентов
    if (tabsWrapperRef.current) {
      const tabs = tabsWrapperRef.current.querySelector('.nav-tabs'); // Ищем .nav-tabs внутри обертки
      const activeTab = tabs.querySelector('.nav-link.active'); // .nav-link.active для более точного селектора
      const activeTabRect = activeTab.getBoundingClientRect();
      const tabsRect = tabs.getBoundingClientRect();
      const slider = tabsWrapperRef.current.querySelector('.tab_slider');
      const sliderRect = tabsWrapperRef.current.getBoundingClientRect('.tab_slider');

      console.log(activeTabRect);
      console.log(tabsRect);
      console.log(sliderRect);

      setSliderStyle({
        top: `${42}px`,
        left: `${activeTabRect.left - tabsRect.left}px`,
        width: `${activeTabRect.width}px`,
      });
    }
  }, [key]);

    return (
        <div>
          <Header />
          <main className='main'>
            <div className=''>
              <CarouselTheater 
                representation={representation}
              />
            </div>
            <div className='main-theater main-padding'>
              <div className='head-theater-text'>
                  ГОСУДАРСТВЕННЫЙ АКАДЕМИЧЕСКИЙ БОЛЬШОЙ ТЕАТР РОССИИ 
                  (ИСТОРИЧЕСКАЯ СЦЕНА)
              </div>
              <Container fluid>
              <div className='tab_slider' ref={tabsWrapperRef} style={{ position: 'relative' }}>
                <div className="tab-slider" style={sliderStyle}></div>
                <Tabs
                  defaultActiveKey="home"
                  id="animated-tab-example"
                  className="mb-3 pb-3"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                >
                  <Tab eventKey="home" title={<span style={{color: 'white'}}>Информация</span>}>
                    <div className="max-w" fluid style={{ minHeight: "570px" }}>
                      <div className='main-theater-info-row'>
                        <div className='text-w5 size-20'><span>Год основания: </span><span>1896 г.</span></div>
                        <div className='text-w5 size-20'><span>Основатель: </span><span>Крутов Крут Крутович</span></div>
                      </div>
                      <div className='main-theater-info-row'>
                        <div className='text-w5 size-20'><span>Адрес: </span><a href='#'>г. Москва, ул. Арбат, д. 26</a></div>
                        <div className='text-w5 size-20'><span>Сайт: </span><a href='#'>vakhtangov.ru</a></div>
                      </div>
                      <div className='main-theater-info-history'>
                        <div className='text-w5 size-30'>История</div>
                        <div className='text-w5 size-20'>Сегодня Театр Вахтангова играет спектакли на 5 площадках в самом центре Москвы: Основная сцена, Новая сцена, Симоновская сцена (с двумя залами — Камерный и Амфитеатр), Студия, Арт-кафе. В репертуаре — классические драматические спектакли, современные пьесы, оперетты, танцевальные шоу, комедии и трагедии, детские спектакли и поэтические вечера. <br /><br/>

В спектаклях Вахтанговского театра задействованы всенародно любимые артисты старшего поколения и восходящие звезды отечественного театра и кино: Людмила Максакова, Ирина Купченко, Евгений Князев, Сергей Маковецкий, Владимир Симонов, Алексей Гуськов, Геннадий Хазанов, Мария Аронова, Юлия Рутберг, Марина Есипенко, Лидия Вележева, Нонна Гришаева, Ольга Тумайкина, Андрей Ильин, Владимир Вдовиченков, Александр Олешко, Виктор Добронравов, Евгения Крегжде, Леонид Бичевин, Ольга Лерман, Мария Волкова и многие-многие другие.</div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title={<span style={{color: 'white'}}>События</span>} className="text-center">
                  <div className='main-theater-grid'>
                      {min_theater.map((theater, index) => 
                          <MinTheater 
                              key={index}
                              main_text='Филлини'
                              year='20 декабря 2024 г'
                              desription='Великий театр великого актера победивший все свои страхи и открывшись собственную школу театрального искуства которая бударажит умы милионнов'
                              backgroundImage='https://www.binoculars-travel.ru/wp-content/uploads/fellini-teatr-vahtangova-2.jpg'
                          />
                      )}
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title={<span style={{color: 'white'}}>Домой</span>} className="text-center">
                    <div className="" style={{ minHeight: "64.5vh" }}>
                      <p>Содержимое вкладки "Контакты", выровненное по центру.</p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
              </Container>
            </div>
          </main>
        </div>
    );
}

export default Theater;