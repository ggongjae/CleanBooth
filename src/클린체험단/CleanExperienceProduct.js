import React from 'react';
import LoginHeader from '../공통/LoginHeader.js';
import Header from '../공통/Header.js';
import Footer from '../공통/Footer.js';
import Gnb from '../공통/Gnb.js';
import "./CleanExperienceProduct.css"
import img1 from'../사진/Rectangle 213.png';
import img2 from'../사진/배송.png';
import img3 from'../사진/Frame 279.png';
import { Link,useLocation } from 'react-router-dom';
import img4 from "./Frame 82.png"
function CleanExperienceProduct  () {

    const location = useLocation();
    const product = location.state?.product;

    return(
        <div className='background'>
            <div className='background_long_round'>
            <LoginHeader/>
            <div className='bigBox'>
                <Gnb/>
                <hr/>
                <div>
                <p className='application_clean'> 클린 체험단 신청하기 </p>
                <div className='experience_product'>
                        <img src={img1} className="experience_product_img"></img>
                        <div>
                        <p className="recruitment_experience"> 모집중</p>
                        <p className="name_experience"> 제목</p>
                        <p className="composition_experience"> 제품구성</p>
                        <p className="year_experience">~ YY/MM/DD </p>
                            <Link to={{ pathname: '/CleanApplication', state: { product } }}> 
                                <button className="apply_button">신청하기</button>
                            </Link>
                        </div>
                        <div>
                            <button className='share_button'>
                                <img src={img4} alt="Share Button" style={{ width: '30px', height: '30px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            <div className='middleBox'>
                <div>
                    <div className ="hr-sect"> ABOUT 클린체험단 </div> 
                    <img src={img3}></img>
                    <img src={img2} className="delivery_img"></img>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        </div>
    );
};

export default CleanExperienceProduct;