import "./login.css";
import Loading from "./loading";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="box">
      <div className="image"></div>
      <div>
        <p className="login_text">로그인하기</p>
        <p className="login_text2">
          소셜로그인으로 간편하게 클린부스를 이용하세요
        </p>
      </div>
      <Link to = "/Loading" className="naver"></Link>
      <Link to = "/Loading" className="kakao"></Link>
    </div>
  );
}

export default Login;