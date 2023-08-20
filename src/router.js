import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './메인/Main';
import CleanExperience from './클린체험단/CleanExperience';
import CleanApplication from './클린체험단/CleanApplication';
import CleanApplicationComplete from './클린체험단/CleanApplicationComplete';
import CleanExperienceProduct from './클린체험단/CleanExperienceProduct';
import NutritionSearch from './영양성분검색/NutritionSearch';
import Loading from "./LoginPage/loading";
import Login from "./LoginPage/login";
import Show from './고객센터/Show';


function router() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} /> 
                <Route path="/menu/1" element={<Main />} /> 
                <Route path="/menu/2" element={<NutritionSearch />} /> 
                <Route path="/menu/4" element={<CleanExperience />} />
                <Route path="/CleanApplication" element={<CleanApplication/>} />
                <Route path="/CleanExperienceProduct" element={<CleanExperienceProduct/>} />
                <Route path="/CleanApplicationComplete" element={<CleanApplicationComplete/>} />
                <Route path="/Login" element={<Login />} /> 
                <Route path="/Loading" element={<Loading />} />
                <Route path="/Customer" element={<Show />} /> 
            </Routes>
        </Router>
    </div>
 
  );
}

export default router;
