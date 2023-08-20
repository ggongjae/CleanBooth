import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img1 from "../사진/Rectangle 32.png";

const LoginHeader = () => {
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const [names, setNames] = useState([]);
  const [isSearchActive, setSearchActive] = useState(false); // 검색창 활성화 상태
  const [relatedKeywords, setRelatedKeywords] = useState([]); // 연관 검색어

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputText.trim() !== "") {
      handleClick();
    }
  };

  const handleClick = () => {
    const array = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(array);
    setInputText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
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
      <li key={name.id}>
        {name.text}
      </li>
    )
  );

  const fetchRelatedKeywords = () => {
    // setRelatedKeywords([...연관 검색어 배열]);
    // 임의의 연관 검색어 
    const related = ["연관", "연관", "연관","연관","연관","연관"];
    setRelatedKeywords(related);
  };

  useEffect(() => {
    if (isSearchActive) {
      fetchRelatedKeywords(); // 검색창이 활성화되었을 때 연관 검색어를 가져옵니다.
    }
  }, [isSearchActive]);

  const renderRelatedKeywords = () => {
    return relatedKeywords.map((keyword, index) => (
      <div key={index} className="related-keyword">
        {keyword}<span> 검색어</span>
      </div>
    ));
  };


  return (
    <header>
      <div className="header">
        <div>
          <Link to="/"><img src={img1} className="logo" alt="Logo" /></Link>
        </div>
        <div className={`search ${isSearchActive ? "active" : ""}`}>
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={inputText}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
          <button type="submit" onClick={handleSearchClick}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: "20px", color: "#000000" }}
            />
          </button>
          {isSearchActive && (
              <div className="related-keywords-container">
                <hr/>
                {renderRelatedKeywords()}
                <hr/>
                <span className="related-keywords-container-close">닫기</span>
              </div>
          )}
        </div>
        
        <div className="user">
          <div className="mypage">마이페이지 </div>
          <span className="divider"> &nbsp;| &nbsp; </span>
          <Link to = "/Customer"><div className="customer_center"> 고객 센터 </div></Link>
        </div>

      </div>
    </header>
  );
};

export default LoginHeader;
