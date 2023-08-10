import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Main from './Main';
import CleanExperience from './CleanExperience';
import CleanApplication from './CleanApplication';
import CleanApplicationComplete from './CleanApplicationComplete';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/menu/1" element={<Main />} /> 
            <Route path="/menu/2" element={<Main />} /> 
            <Route path="/menu/4" element={<CleanExperience />} />
            <Route path="/CleanApplication" element={<CleanApplication/>} />
            <Route path="/CleanApplicationComplete" element={<CleanApplicationComplete/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
