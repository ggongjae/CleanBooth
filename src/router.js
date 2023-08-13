import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './메인/Main';
import CleanExperience from './클린체험단/CleanExperience';
import CleanApplication from './클린체험단/CleanApplication';
import CleanApplicationComplete from './클린체험단/CleanApplicationComplete';


function router() {
  return (
    <div>
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

export default router;
