import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import abc from './Ellipse 17.png';

const BodyTemplateBlock = styled.div`
    padding-left: 50px;
    padding-top: 10px;
    .category{
        font-size: 10pt;
        text-align: left;
    }
    .ctgr{
        text-decoration: none;
        color: black;
    }
    .pic{
        display: inline-block;
        width: 40%;
    }
    .PTitle{
        display: inline-block;
        vertical-align: top;
        padding-left: 15px;
    }
    .PDetail{
        text-align: left;
        padding-top: 20px;
    }
    .brandName{
        color: #999999;
        font-size: 15pt;
    }
    .product{
        color: #333333;
        font-size: 25pt;
        font-weight: bold;
    }
    .heart{
        width: 50px;
    }
    .shopBttn{
        display: inline-block;
        margin-left: 5px;
        background-color: #009F50;
        height: 50px;
        border-radius: 10px;
        
    }
    .detail{
        margin-top: 30px;
        font-weight: bold;
        font-size: 15pt;
        font-color: #333333;
    }
    .logo180{
        margin-top: 50px;
    }
    .certified{
        font-size: 18pt;
        font-weight:bold;
    }
    .badge{
        margin: 30px;
    }
    .badgeFig{
        display: inline-block;
    }
    .badgeName{
        font-weight: bold;
        font-size: 15pt;
    }
    .cap0{
        margin-top: 70px;
        margin-bottom: 30px;
        font-weight: bold;
        font-size: 22pt;
    }
    .cap1{
        font-weight: bold;
        font-size: 15pt;
    }
    .captionBlock{
        margin-top:20px;
    }
    .dash{
        border: 1px dashed #009F50;
        flex: auto;
    }
    .dashedhr{
        margin-top: 500px;
        display: flex;
        align-items: center;
    }
    .txt {
        padding: 0 10px;
        font-weight: bold;
        font-size: 15pt;
    }
`;

function PDetailBlock() {
    
    let [PDetail] = useState(['브랜드명', '제품명']);

    return (
        <BodyTemplateBlock>
            <div>
                <div className='category'>
                    <a className='ctgr' href=''>비건&다이어트</a>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <a className='ctgr' href=''>대분류</a>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                    <a className='ctgr' href='' style={{color:'#009F50'}}>소분류</a>
                </div>
                <div className='PDetail'>
                    <img className='pic' src='/product_img.png'/>
                    <div className='PTitle'>
                        <div className='brandName'>{PDetail[0]}</div>
                        <div className='product'>{PDetail[1]}</div> 
                    </div>
                    <img className='heart' src='/heart.png'/> 
                    <Button className='shopBttn' variant="success">빠른 구매하러 가기</Button>{' '}
                </div>
                <div className='detail'>
                    <span style={{marginRight:'10%'}}>상세정보</span>
                    <span style={{marginLeft:'10%'}}>구매 후기</span>
                </div>
                <hr style={{fontColor:'#B3B3B3', marginTop: '15px'}}/>
                <img className='logo180' src='/Rectangle 180.png'/>
                <p className='certified'>클린부스 인증 뱃지</p>
                <figure className='badgeFig'>
                    <img className='badge' src={abc}/>
                    <figcaption className='badgeName'>클린 인증 뱃지</figcaption>
                </figure>
                <figure className='badgeFig'>
                    <img className='badge' src={abc}/>
                    <figcaption className='badgeName'>우수 평점 뱃지</figcaption>
                </figure>
                <figure className='badgeFig'>
                    <img className='badge' src={abc}/>
                    <figcaption className='badgeName'>클린 프리미엄 뱃지</figcaption>
                </figure>
                <div>
                    <p className='cap0'>클린부스만 믿으세요!</p>
                    <div className='captionBlock'>
                        <p className='cap1'>자체 평가 기준 통과 제품</p>
                        <p className='cap2'>클린부스만의 평가 기준으로 안전한 제품만 판매하겠습니다.</p>
                    </div>
                    <div className='captionBlock'>
                        <p className='cap1'>소비자의 구매 후기 3.0 점 이상 제품</p>
                        <p className='cap2'>입고 후 후기가 90일 동안 3.0 이하는 판매를 철회하겠습니다.</p>
                    </div>
                    <div className='captionBlock'>
                        <p className='cap1'>클린체험단이 인정한 제품</p>
                        <p className='cap2'>체험단분들이 인정한 제품으로 평점 3.5 이상인 제품을 "프리미엄" 제품으로 판매하겠습니다.</p>
                    </div>
                </div>
                <div className='dashedhr'>
                    <hr className='dash'/>
                    <span className='txt'>클린추천 레시피</span>
                    <hr className='dash'/>
                </div>
            </div>
        </BodyTemplateBlock>
    );
}

export default PDetailBlock;