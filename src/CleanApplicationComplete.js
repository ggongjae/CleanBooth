import { useState } from 'react';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Gnb from './Gnb.js';
import './CleanApplicationComplete.css';
import img1 from './사진/Vector.png'



const CleanApplicationComplete = () => {
    return(
        <div>
            <Header/>
            <div className='bigBox'>
                <Gnb/>
                <div className='complete'>
                    <img src={img1} className="check"></img>
                    <p>클린 체험단 신청이 완료되었습니다</p>
                    <div>
                        <button className='complete_move'> 메인화면으로 이동하기 </button>
                        <p></p>
                        <button className='complete_check'> 신청 내역 확인하기 </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default CleanApplicationComplete;