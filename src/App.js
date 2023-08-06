import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MainImage from './MainImage';
import MainSearch from './MainSearch';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Gnb from './Gnb';
import CleanExperience from './CleanExperience';
import CleanApplication from './CleanApplication';
import CleanApplicationComplete from './CleanApplicationComplete';


function App() {
  return (
    <div className="App">
      <div className='background'>
      <Router>

          <Routes>
      
            <Route path="/" element={<Main />} /> 
            <Route path="/menu/1" element={<Main />} /> 
            <Route path="/menu/2" element={<Main />} /> 
            <Route path="/menu/4" element={<CleanExperience />} />
            <Route path="/CleanApplication" element={<CleanApplication/>} />
            <Route exact path="/" component={CleanApplication} />
            <Route path="/CleanApplicationComplete" element={<CleanApplicationComplete/>} />
  
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
