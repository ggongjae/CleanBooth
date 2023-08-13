import { useState, useRef } from 'react';
import {  Link } from 'react-router-dom';
import './CleanApplication.css';
import React from 'react';
import Header from '../공통/Header';
import Footer from '../공통/Footer';
import Gnb from '../공통/Gnb';
import img from '../사진/Rectangle 213.png'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import Modal from './Modal';
import Select from "react-select";


let delivery_options = [
    { value: "1", label: "부재시 집 앞에 놓아주세요" },
    { value: "2", label: "부재시 택배함에 놓아주세요" },
    { value: "3", label: "부재시 경비실에 놓아주세요" },
];

let product_options = [
    { value: "1", label: "제품명" },
    { value: "2", label: "제품명" },
    { value: "3", label: "제품명" },
];
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
    const deliveryInputRef = useRef(null);
    const productInputRef = useRef(null);

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
    // 개인정보 제 3자 제공 동의 상태를 저장할 state
    const [privacyAgreed, setPrivacyAgreed] = useState(false);

    // 개인정보 제 3자 제공 동의 체크박스 클릭 시 호출되는 함수
    const handlePrivacyAgree = () => {
        setPrivacyAgreed(!privacyAgreed);
    };
     // 약관 모달 창 관리
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 약관 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 약관 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };
    //select css
    const customStyles = { 
        control: (provided, state) => ({
            ...provided,
            border: '2px solid #b3b3b3',
            borderRadius: '5px',
            fontFamily: 'medium', 
            fontSize: '14px', 
        }),
    };
    
    return(
        <div className='background'>
            <div className='background_short_round'>
            <Header/>
            <div className='bigBox'>
                <Gnb/>
                <hr className='application_clean_hr'/>
                <p className='application_clean'> 클린 체험단 신청하기 </p>
                <div className='application'>
                    <div className='application_1'>
                        <img src={img} className="application_product_img"></img>
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
                            <Select 
                                className='application_caution'
                                ref={deliveryInputRef}
                                onChange={(e) => {
                                    if (e) {
                                        setEmergency(e.value);
                                    } else {
                                        setEmergency("");
                                    }
                                }}
                                options={delivery_options}
                                placeholder="부재시 연락 부탁드립니다."
                                styles={customStyles}
                            />
                        </div>
                    </div>
                    <div className ="hr_application"> 상품 선택 </div> 
                        <div className='application_product'>
                            <p>상품<span>*</span></p>
                            <Select 
                                className='application_product_select'
                                ref={productInputRef}
                                onChange={(e) => {
                                    if (e) {
                                        setProduct(e.value);
                                    } else {
                                        setProduct("");
                                    }
                                }}
                                options={product_options}
                                placeholder="상품을선택하세요."
                                styles={customStyles}
                            />
                        </div>
                    <div className ="hr_application"> 이용자 동의 </div> 
                        <div className='application_box'>
                        <checkbox className='application_privacy' onClick={handlePrivacyAgree}>
                            {privacyAgreed ? '✓' : ''}
                        </checkbox>
                            <p className='application_need'> (필수)</p> 
                            <p>개인정보 제 3자 제공 동의</p> 
                            <button className='viewterms_button'onClick={openModal}>약관보기</button>
                            {isModalOpen && (
                            <Modal onClose={closeModal} />
                        )}
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
        </div>
    )
}

export default CleanApplication;
