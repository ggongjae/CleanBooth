import "./MainSearch.css"
import { useState } from 'react';
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
          <li><img className='ss'></img><p>식물성단백질</p></li>
          <li><img className='ss'></img><p>아몬드</p></li>
          <li><img className='ss'></img><p>귀리</p></li>
          <li><img className='ss'></img><p>코코넛</p></li>
          <li><img className='ss'></img><p>치아씨드</p></li>
          <li><img className='ss'></img><p>렌틸콩</p></li>
          <li><img className='ss'></img><p>병아리콩</p></li>
          <li><img className='ss'></img><p>치아씨드</p></li>
          <li><img className='ss'></img><p>퀴노아</p></li>
        </ul>
      )} 
        {showDietImage && ( 
        <ul className='diet_image'>
          <li><img className='ss'></img><p>고단백/저탄수화물</p></li>
          <li><img className='ss'></img><p>저칼로리</p></li>
          <li><img className='ss'></img><p>저나트륨</p></li>
          <li><img className='ss'></img><p>무설탕</p></li>
          <li><img className='ss'></img><p>천연 감미료</p></li>
          <li><img className='ss'></img><p>글루텐 글루</p></li> 
          <li><img className='ss'></img><p>운동 보충제</p></li> 
        </ul>
      )}
      </div>
    )
}

export default MainSearch