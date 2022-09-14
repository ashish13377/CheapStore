import React from 'react';
import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';
import Slider02 from '../components/slider/Slider02';
import dataSlider2 from '../assets/fake-data/dataSlider2';
import BestSeller from '../components/layouts/home02/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller';
import LiveAution from '../components/layouts/home02/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import Create from '../components/layouts/home02/Create';
import dataCreate from '../assets/fake-data/dataCreate'
import LatestCollections from '../components/layouts/home02/LatestCollections';
import dataCollections from '../assets/fake-data/dataCollections'
import HotCollections from '../components/layouts/home02/HotCollections';
import dataHotCollection from '../assets/fake-data/dataHotCollection';
import PopularCollection from '../components/layouts/home02/PopularCollection';
import dataPopularCollection from '../assets/fake-data/dataPopularCollection';
import FooterStyle2 from '../components/footer/FooterStyle2';
import { Newsletters } from '../components/layouts/home02/Newsletters';

const Home02 = () => {
  return <div className='home-2'>
      <Header />
      <Slider02 data={dataSlider2} />
      <BestSeller data={dataBestSeller} />
      <LiveAution data={dataLiveAution} />
      <Create data={dataCreate} />
      <LatestCollections data={dataCollections} />
      <HotCollections data={dataHotCollection} />
      <PopularCollection data={dataPopularCollection} />
      <Newsletters />
      <FooterStyle2 />
  </div>;
};

export default Home02;
