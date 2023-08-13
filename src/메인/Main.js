import './Main.css';
import MainSearch from './MainSearch';
import Header from '../공통/Header'
import MainImage from './MainImage';
import Footer from '../공통/Footer'
import Gnb from '../공통/Gnb';

const Main = () => {
  return (
    <div className='background'>
      <div className='background_long_round'>
      <Header />
      <div className="bigBox">
        <Gnb/>
        <MainImage />
        <MainSearch />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Main;
