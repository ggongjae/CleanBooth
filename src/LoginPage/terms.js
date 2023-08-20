import "./terms.css";
import logoImage from "./Rectangle 36.png";
import { Link } from "react-router-dom";

function Terms() {
  const handleClick = () => {};
  return (
    <div className="main">
      <img src={logoImage} className="logo"></img>
      <p className="terms_text">약관 동의</p>
      <div className="first">
        <p>클린 부스 이용 약관 (필수)</p>
        <button className="more" onClick={handleClick}>
          {" "}
          더 보기 &gt;{" "}
        </button>
      </div>
      <div className="second">
        <p>개인 정보 취급 방침 (필수)</p>
        <button className="more" onClick={handleClick}>
          {" "}
          더 보기 &gt;{" "}
        </button>
      </div>
      <div className="third">
        <p>마케팅 정보 수집 동의(선택)</p>
        <button className="an_more" onClick={handleClick}>
          {" "}
          더 보기 &gt;{" "}
        </button>
      </div>
      <div className="line"></div>
      <div className="main_checkbox">
        <input type="checkbox" className="checkbox"></input>
        <p className="checkbox_text">클리 부스 약관에 모두 동의 합니다</p>
      </div>
      <div className="button_part">
        <Link to='/' className="front">이전</Link>
        <a className="sure">확인</a>
      </div>
    </div>
  );
}

export default Terms;