
function Announcement ({count}) {
    return(
      <div>
        <ul className="customer_ul">
                <li className="customer_text">
                  게시판에 글쓰기를 하는 경우, 본문 또는 첨부파일 내에 개인정보가
                  포함 되지 않도록 유의하시기 바랍니다.
                </li>
                <li className="customer_text">
                  타인의 개인정보를 노출하는 경우에는 개인정보보호법에 따라
                  처벌받을 수 있습니다.
                </li>
              </ul>
              <div className="customer_search">
                <p className="customer_count">
                  총 {count}건의 게시물이 검색되었습니다.
                </p>
                <div className="search_box">
                  <select>
                    <option>제목</option>
                    <option>작성자</option>
                    <option>내용</option>
                  </select>
                  <input className="customer_input" placeholder="검색어"></input>
                  <button
                    className="customer_button"
                    onClick={() => console.log("d")}
                  >
                    검색
                  </button>
                </div>
              </div>
              <div className="customer_title">
                <p>번호</p>
                <p>작성일</p>
                <p>작성자</p>
                <p className="customer_title_title">제목</p>
                <p>조회수</p>
              </div>
              <hr className="hr_style" />
      </div>
      
    );
  }
  
  export default Announcement;