import "./MainSearch.css"
import { useState } from 'react';
import img1 from './사진/Rectangle 170.png';
import img2 from './사진/Rectangle 171.png';
import img3 from './사진/Rectangle 172.png';
import img4 from './사진/Rectangle 173.png';
import img5 from './사진/Rectangle 174.png';
import img6 from './사진/Rectangle 175.png';
import img7 from './사진/Rectangle 176.png';
import img8 from './사진/Rectangle 177.png';
import img9 from './사진/Rectangle 178.png';
import img10 from './사진/Rectangle 179.png';
import img11 from './사진/Rectangle 180.png';
import img12 from './사진/Rectangle 181.png';
import img13 from './사진/Rectangle 182.png';
import img14 from './사진/Rectangle 183.png';
import img15 from './사진/Rectangle 184.png';

const MainSearch = () => {

    const [showViganImage, setShowViganImage] = useState(true);
    const [showDietImage, setShowDietImage] = useState(false);
  
    const handleViganClick = () => {
      setShowViganImage(true);
      setShowDietImage(false);
    };
  
    const handleDietClick = () => {
      setShowViganImage(false);
      setShowDietImage(true);
    };
    return(
        <div className='box'>
        <h1> 영양 성분 검색하기 </h1>
        <ul className='vigandiet'>
          <li className={showViganImage ? 'vigan selected' : 'vigan'}
          onClick={handleViganClick}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 비건 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
          <li className={showDietImage ? 'diet selected' : 'diet'}
          onClick={handleDietClick}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다이어트 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
        </ul>
        <hr />
        {showViganImage && (
        <ul className='vigan_image'>
          <li><img className='img1' src ={[img1]}></img><p>식물성단백질</p></li>
          <li><img className='img2' src ={[img2]}></img><p>아몬드</p></li>
          <li><img className='img3' src ={[img3]}></img><p>귀리</p></li>
          <li><img className='img4' src ={[img4]}></img><p>코코넛</p></li>
          <li><img className='img5' src ={[img5]}></img><p>치아씨드</p></li>
          <li><img className='img6' src ={[img6]}></img><p>렌틸콩</p></li>
          <li><img className='img7' src ={[img7]}></img><p>병아리콩</p></li>
          <li><img className='img8' src ={[img8]}></img><p>치아씨드</p></li>
        </ul>
      )} 
        {showDietImage && ( 
        <ul className='diet_image'>
          <li><img className='img9' src ={[img9]}></img><p>고단백/저탄수화물</p></li>
          <li><img className='img10' src ={[img10]}></img><p>저칼로리</p></li>
          <li><img className='img11' src ={[img11]}></img><p>저나트륨</p></li>
          <li><img className='img12' src ={[img12]}></img><p>무설탕</p></li>
          <li><img className='img13' src ={[img13]}></img><p>천연 감미료</p></li>
          <li><img className='img14' src ={[img14]}></img><p>글루텐 글루</p></li> 
          <li><img className='img15' src ={[img15]}></img><p>운동 보충제</p></li> 
        </ul>
      )}
      </div>
    )
}

export default MainSearch