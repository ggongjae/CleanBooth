import { useState } from 'react';
import './Gnb.css';
import MainSearch from './MainSearch';
import CleanExperience from './CleanExperience';
import Header from './Header';
import MainImage from './MainImage';
import Footer from './Footer';
import {Switch, Route, Link } from 'react-router-dom';
const Gnb = () => {
  // 메뉴 정보 
  const menuData = [
    {
      id: 1,
      label: '비건&다이어트',
      subMenu: [
        { id: 11, label: '식물성 단백질', subSubMenu: ['대체육/대체 해산물', '그래놀라/씨앗/견과류'] },
        { id: 12, label: '면/소스/오일', subSubMenu: ['파스타/면류', '소스/오일/감미료', '밀가루/가루료'] },
        { id: 13, label: '과자/간식/음료', subSubMenu: ['과자,스낵,쿠키', '젤리/아이스크림', '유제품/음료'] },
        { id: 14, label: '베이커리/빵류' },
        { id: 15, label: '건강기능식품/보조제' },
      ],
    },
    {
      id: 2,
      label: '영양성분 검색',
      subMenu: [
        {
          id: 21,
          label: '비건 성분',
          subSubMenu: ['식물성 단백질', '유제품 무첨가 Diary Free', '견과류 무첨가 Grain Free', '대두 무첨가'],
        },
        {
          id: 22,
          label: '다이어트 성분',
          subSubMenu: ['저탄수화물/고단백', '무설탕/Low Suger/제로슈가', '히브스커스', '카페인Free'],
        },
      ],
    },
    { id: 3, label: '클린부스 소개'},
    { id: 4, label: '클린 체험단' },
    { id: 5, label: '클린 레시피' },
  ];

  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleMenuClick = (id) => {
    setSelectedMenuId(id);
  };

  return (

    <div className="gnb">
      <ul className='depth1'>
        {menuData.map((menu) => (
          <li key={menu.id}>
            <Link to={`/menu/${menu.id}`} onClick={() => handleMenuClick(menu.id)}>{menu.label}</Link>
            {menu.subMenu && menu.subMenu.length > 0 && (
              <ul className='depth2'>
                <div className='smallbox'>
                  <div className="message">{menu.label}</div>
                  {menu.subMenu.map((subMenu) => (
                    <li key={subMenu.id}>
                      <a href='' onClick={() => handleMenuClick(subMenu.id)}>{subMenu.label}</a>
                      {subMenu.subSubMenu && subMenu.subSubMenu.length > 0 && (
                        <ul className='depth3'>
                          {subMenu.subSubMenu.map((subSubMenu) => (
                            <li key={subSubMenu.id}>
                              <a href=''>{subSubMenu}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    

  );
};

export default Gnb;


