import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="allText">
        <div className="all">
          <div className="first_part">
            <h2 className="title">Cleanbooth 클린부스</h2>
            <strong className=" title_second">고객센터</strong>
            <div className="middle_part">
              <div className="cs">
                <button className="cs_button">cs 운영시간</button>
                <div className="cs_text">
                  오전 9시 - 오후 8시
                  <br />
                  (점심시간 12시 - 13시)
                </div>
              </div>
              <div className="inquiry">
                <button className="inquiry_button">1:1문의</button>
                <div className="inquiry_text">
                  전화번호: 010-9504-5127 <br />
                  이메일: kimsebin0525@naver.com
                </div>
              </div>
              <div className="kakao">
                <button className="kakao_button"> 카카오톡 문의</button>
                <div className="kakao_text">
                  평일 | 오전 9시 - 오후 6시 <br />
                  휴일 | 오전 9시 - 오후 1시
                </div>
              </div>
            </div>
          </div>
          <div className="second_title">
            <h1 className="second_text">쇼핑몰 기본 정보</h1>
            <strong>상호명</strong>: (주)클린부스 <br />
            <br />
            <strong>대표자명</strong>: 김희진
            <br />
            <br />
            <strong>대표전화</strong>: 000-0000-0000
            <br />
            <br />
            <strong>사업자 등록번호</strong>: 000-00-00000
            <div className="second_bottom">
              <ul className="list">
                <li className="list_first">
                  <a herf="#" target="_self" className="list_text">
                    회사소개
                  </a>
                </li>
                <li className="list_last">
                  <a herf="#" className="list_text">
                    이용약관
                  </a>
                </li>
                <li className="list_last">
                  <a herf="#" className="list_text">
                    개인정보처리방침
                  </a>
                </li>
                <li className="list_last">
                  <a herf="#" className="list_text">
                    공지사항
                  </a>
                </li>
                <li className="list_last">
                  <a herf="#" className="list_text">
                    SNS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;