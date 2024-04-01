import React from "react";
import {ImgPerformance, ImgTheater } from '../components/img_head';
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

export const CarouselPerformance = ({representation}) => {
    return (
        <Carousel responsive={responsive}
            infinite>
            {representation.map((repres, index) => 
                <ImgPerformance
                    key={index}
                    img={repres.img}
                    head_text={repres.head_text}
                    main_text={repres.main_text}
                />
            )}
        </Carousel>
    );
}

export const CarouselTheater = ({representation}) => {
  return (
      <Carousel responsive={responsive}
          infinite
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}>
          {representation.map((repres, index) => 
              <ImgTheater
                  key={index}
                  img={repres.img}
              />
          )}
      </Carousel>
  );
}