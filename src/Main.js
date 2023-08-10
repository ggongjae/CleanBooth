import { useState } from 'react';
import './Main.css';
import MainSearch from './MainSearch';
import Header from './Header';
import MainImage from './MainImage';
import Footer from './Footer'
import Gnb from './Gnb';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='background_main'>
      <Header />
      <div className="bigBox">
        <Gnb/>
        <MainImage />
        <MainSearch />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
