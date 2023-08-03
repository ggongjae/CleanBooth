import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import './Header.css'

const Header = () =>{
  const [value,setValue] = useState(" "); 
  return(
    <header>
      <div className="header">
        <div>
        <img src = "./Rectangle 32.png" className='logo'/>
        </div>
        <div className='search'>
          <input type = "text" placeholder ="검색어를 입력해주세요"></input>
          <button type = "submit">
            <FontAwesomeIcon icon={faSearch}  style={{fontSize : "20px", color: "#000000"  }} /> 
          </button>
          
        </div>
        <div className='user'>
          <div button className='login'> 로그인 &nbsp; </div>   
          <span className='divider'> | &nbsp; </span>
          <div button className='sign-up'> 회원 가입 &nbsp; </div>    
          <span className='divider'>  | &nbsp; </span>
          <div button className='customer_center'> 고객 센터 </div>
        </div>
      </div>
    </header>
  );
}

export default Header;