import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Gnb from './Gnb.js';
import './CleanExperience.css';
import img1 from'./사진/Rectangle 213.png';
import img2 from'./사진/배송.png';
import img3 from'./사진/Frame 279.png';
import { Link } from 'react-router-dom';


const CleanExperience = () => {
    return(
        <div className='background'>
            <Header/>
            <div className='bigBox'>
            <Gnb/>
            <hr/>
            <div className='middleBox'>
                <h2 className='title_4'>클린 체험단</h2>
                <div className='content'>
                    <p className='content_1'> 클린체험단을 통해 미리 먹어보고 주문하세요!</p>
                    <p className='content_2'> 비건 식품을 먹어보고 싶은데, 생소한 맛일까봐 걱정인분들 <br/>
                    실패없이 다이어트 제품 구매하고 싶은데, 대용량 사이즈와 가격이 부담되시는 분들 <br/>
                    좋은 제품을 많이 소개받고, 체험하시고 싶은 분들 <br/>
                    좋은 후기 글을 자신일게! 작성할 수 있는 분들!</p>
                </div>
                <div>
                    <ul className="product_ul">
                        <Link to="/CleanApplication"><button>신청하기</button></Link>
                        <li><img src ={img1} className="product_1"></img>
                        <p className='recruitment'> 모집 여부</p> <p className='name'> 제품명 </p> <p className='composition'> 제품 구성</p> <p className='year'>~YY/MM//DD</p></li>
                        <li><img src={img1} className="product_2"></img>
                        <p className='recruitment'> 모집 여부</p> <p className='name'> 제품명 </p> <p className='composition'> 제품 구성</p> <p className='year'>~YY/MM//DD</p></li>
                        <li><img src={img1} className="product_3"></img>
                        <p className='recruitment'> 모집 여부</p> <p className='name'> 제품명 </p> <p className='composition'> 제품 구성</p> <p className='year'>~YY/MM//DD</p></li>
                        <li><img src={img1} className="product_4"></img>
                        <p className='recruitment'> 모집 여부</p> <p className='name'> 제품명 </p> <p className='composition'> 제품 구성</p> <p className='year'>~YY/MM//DD</p></li>
                    </ul>
                </div>
                <div>
                    <div className ="hr-sect"> ABOUT 클린체험단 </div> 
                    <img src={img3}></img>
                    <img src={img2} className="delivery_img"></img>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default CleanExperience;