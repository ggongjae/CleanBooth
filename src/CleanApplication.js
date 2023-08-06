import { useState } from 'react';
import './CleanApplication.css';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Gnb from './Gnb.js';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import img from './사진/Rectangle 213.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from './Modal';
import CleanApplicationComplete from './CleanApplicationComplete'; 


const CleanApplication = () => {
    const [nameValue, setName] = useState('');
    const [numberValue, setNumber] = useState('');
    const [addressValue, setAddress] = useState('');
    const [detailValue, setDetail] = useState('');
    const [emergencyValue, setEmergency] = useState('');
    const [productValue, setProduct] = useState('');


    const saveUserName = event => {
        setName(event.target.value);
    };
    const saveUserNumber = event => {
        setNumber(event.target.value);
    };
  
    const saveUserAddress = event => {
        setAddress(event.target.value);
    };
    const saveUserDetail = event => {
        setDetail(event.target.value);
    };
    const saveUserEmergency = event => {
        setEmergency(event.target.value);
    };
    const saveUserProduct = event => {
        setProduct(event.target.value);
    };
    const handleConfirmAddress = (address) => {
        setAddress(address);
        setIsPopupOpen(false);
      };

   	// 팝업창 상태 관리
       const [isPopupOpen, setIsPopupOpen] = useState(false)
 
       // 팝업창 열기
       const openPostCode = () => {
           setIsPopupOpen(true)
       }
    
       // 팝업창 닫기
       const closePostCode = () => {
           setIsPopupOpen(false)
       }
         // 개인정보 제 3자 제공 동의 상태를 저장할 state
    const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // 개인정보 제 3자 제공 동의 체크박스 클릭 시 호출되는 함수
  const handlePrivacyAgree = () => {
    setPrivacyAgreed(!privacyAgreed);
  };

    return(
        <div>
            <Header/>
            <div className='bigBox'>
                <Gnb/>
                <hr/>
                <p className='application_clean'> 클린 체험단 신청하기 </p>
                <div>
                    <div className='application_1'>
                        <img src={img} className="product"></img>
                        <div>
                            <p className='recruitment_application'> 모집 여부</p> <p className='name_application'> 제품명 </p> 
                            <p className='composition_application'> 제품 구성</p> <p className='year_application'>~YY/MM//DD</p>
                        </div>
                    </div>
                    <div className ="hr_application"> 배송지 정보 </div> 
                    <div className='application_2'>
                        <div>
                            <p className='application_name_content'>받는분 <span>*</span></p>
                            <input className="application_name" type="text" placeholder="홍길동" value={nameValue} onChange={saveUserName} />
                        </div>
                        <div>
                            <p className='application_number_content'>휴대폰 번호<span>*</span></p>
                            <input className="application_number" type="text" placeholder="010-1234-5678" value={numberValue} onChange={saveUserNumber} />
                        </div>
                        <div>
                            <p>배송지<span>*</span></p>
                            <input className="application_address" type="text"  placeholder="클린대로 845" value={addressValue} onChange={saveUserAddress} />
                            <button type='button' onClick={openPostCode}>우편번호 검색</button>
                            <div id='popupDom'> 
                            {isPopupOpen && (
                                <PopupDom>
                                    <PopupPostCode onClose={() => setIsPopupOpen(false)}
                                    onConfirm={handleConfirmAddress} />
                                </PopupDom>
                            )}
                            </div>
                            <input className="application_detail" type="text" placeholder="배송지 상세 주소를 입력하세요" value={detailValue} onChange={saveUserDetail} />
                        </div>
                        <div>
                            <p>배송 주의사항</p>
                            <input className="application_caution" type="text" placeholder="부재시 연락 부탁드립니다" value={emergencyValue} onChange={saveUserEmergency} />
                        </div>
                    </div>
                    <div className ="hr_application"> 상품 선택 </div> 
                        <div>
                            <p>상품<span>*</span></p>
                            <input className="application_product" type="text" placeholder="상품을 선택하세요" value={productValue} onChange={saveUserProduct} />
                        </div>
                    <div className ="hr_application"> 이용자 동의 </div> 
                        <div>
                        <button className='application_privacy' onClick={handlePrivacyAgree}>
                            {privacyAgreed ? '✓' : ''}
                        </button>
                            <p className='application_need'> (필수)</p> <p>개인정보 제 3자 제공 동의</p> <a href='#'>약관보기</a>
                    
                        </div>
                        <Link to ="/CleanApplicationComplete">
                        <button
                            className={`application_apply_button ${privacyAgreed ? 'active' : ''}`} disabled={!privacyAgreed}> 신청하기
                        </button>
                        </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CleanApplication;
