import React from 'react';
import {Header, CarouselHead, MinTheater} from '../components';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

const Theater = () => {
    return (
        <div>
          <Header />
          <main className='main'>
            <div className='head-theater main-padding'>
              <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                arrows={false}
              >
                <img 
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moscow-Bolshoi-Theare-1.jpg/274px-Moscow-Bolshoi-Theare-1.jpg'
                  className='head-theater-img'
                />
                <img 
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moscow-Bolshoi-Theare-1.jpg/274px-Moscow-Bolshoi-Theare-1.jpg'
                  className='head-theater-img'
                />
                <img 
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moscow-Bolshoi-Theare-1.jpg/274px-Moscow-Bolshoi-Theare-1.jpg'
                  className='head-theater-img'
                />
                
              </Carousel>
            </div>
          </main>
        </div>
    );
}

export default Theater;