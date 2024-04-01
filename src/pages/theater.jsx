import React, { useState } from 'react';
import {Header, CarouselTheater, TabPanel} from '../components';
import { Box, Tab, Tabs } from '@mui/material';

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
const Theater = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div>
          <Header />
          <main className='main'>
            <div className=''>
              <CarouselTheater 
                representation={representation}
              />
            </div>
            <div className='main-theater main-padding '>
              <div className='head-theater-text'>
                  ГОСУДАРСТВЕННЫЙ АКАДЕМИЧЕСКИЙ БОЛЬШОЙ ТЕАТР РОССИИ 
                  (ИСТОРИЧЕСКАЯ СЦЕНА)
              </div>
              <Box sx={{ width: '100%', color: 'white' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Информация"/>
                    <Tab label="События" />
                    <Tab label="Актеры"/>
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  Здесь может быть ваш текст или компонент для вкладки "Информация".
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Здесь может быть ваш текст или компонент для вкладки "События".
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Здесь может быть ваш текст или компонент для вкладки "Актеры".
                </TabPanel>
              </Box>
            </div>
          </main>
        </div>
    );
}

export default Theater;