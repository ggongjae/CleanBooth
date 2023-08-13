import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img1 from "../사진/Rectangle 32.png";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const [names, setNames] = useState([]);

  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleClick = () => {
    const array = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(array);
    setInputText("");
  };

  const onKeyPress = (e) => {
    //엔터 누르면 출력
    if (e.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    console.log(names);
  }, [names]);

  const onRemove = (id) => {
    // 삭제하는 코드
    const remove = names.filter((name) => name.id !== id);
    setNames(remove);
  };
  const nameList = names.map(
    //더블클릭시 사용자 삭제
    (name) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
    )
  );
  return (
    <header>
      <div className="header">
        <div>
          <Link to = '/'><img src={img1} className="logo" /></Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={inputText}
            onChange={onChange}
            onKeyPress={onKeyPress}
          ></input>
          <button type="submit">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: "20px", color: "#000000" }}
              onClick={handleClick}
            />
          </button>
          <p className="not_dot">{nameList}</p>
        </div>
        <div className="user">
          <span> 로그인 &nbsp; </span>
          <span className="divider"> | &nbsp; </span>
          <div className="sign-up"> 회원 가입 &nbsp; </div>
          <span className="divider"> | &nbsp; </span>
          <div className="customer_center"> 고객 센터 </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
