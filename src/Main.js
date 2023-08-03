import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import './Main.css'

const Main = () => {
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
  
    return (
      <div className="bigBox">
        <div className="gnb">
          <ul className='depth1'>
            <li>
                <a href=''>비건&다이어트</a>
                <ul className='depth2'>
                  <div className='smallbox'>
                    <a href='' className="message">비건&다이어트</a>
                    <li>
                    <a href=''>식물성 단백질</a>
                    <ul className='depth3'>
                      <li> <a href=''>대체육/대체 해산물</a></li>
                      <li> <a href=''>그래놀라/씨앗/견과류</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href=''>면/소스/오일</a>
                      <ul className='depth3'>
                        <li><a href=''>파스타/면류</a></li>
                        <li><a href=''>소스/오일/감미료</a></li>
                        <li>밀가루/가루료</li>
                      </ul>  
                    </li>
                    <li>
                    <a href=''>과자/간식/음료</a>
                    <ul className='depth3'> 
                      <li><a href=''>과자,스낵,쿠키</a></li>
                      <li><a href=''>젤리/아이스크림</a></li>
                      <li><a href=''>유제품/음료</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href=''>베이커리/빵류</a>
                  </li>
                  <li>
                    <a href=''>건강기능식품/보조제</a>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <a href='' className='nutritionSearch'>영양성분 검색</a>
              <ul className='depth2'>
                <div className='smallbox'>
                  <div className='message'>영양성분 검색</div>
                  <li><a href=''>비건 성분</a>
                  <ul className='depth3'>
                    <li><a href=''>식물성 단백질</a></li>
                    <li><a href=''>유제품 무첨가 Diary Free</a></li>
                    <li><a href=''>견과류 무첨가 Grain Free</a></li>
                    <li><a href=''>대두 무첨가</a></li>
                  </ul>
                  </li>
                  <li><a href=''>다이어트 성분</a>
                  <ul className='depth3'>
                    <li><a href=''>저탄수화물/고단백</a></li>
                    <li><a href=''>무설탕/Low Suger/제로슈가</a></li>
                    <li><a href=''>히브스커스</a></li>
                    <li><a href=''>카페인Free</a></li>
                  </ul>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <a href='' className='introduction'>클린부스 소개</a>
            </li>
            <li>
              <a href=''className='reviwer'>클린 체험단</a>
            </li>
            <li>
              <a href=''className='reciepe'>클린 레시피</a>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src='./Rectangle 169.png' alt="Image" />
          <img className ='cookie_1'src='./169_1.png'></img>
          <img className='cookie_2' src='./169_2.png'></img>
          <img className='cookie_3' src='./169_3.png'></img>
        </div>
        
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
    </div>
    );
  };

  export default Main;










  
