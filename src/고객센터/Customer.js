import "./Customer.css";
import { useState } from "react";
import Inquiry from "./Inquiry";
import Announcement from "./Announcement";

function Custmoer() {
  const [count, setCount] = useState(0);
  const [showViganImage, setShowViganImage] = useState(true);
  const [showDietImage, setShowDietImage] = useState(false);

  const handleViganClick = () => {
    setShowViganImage(true);
    setShowDietImage(false);
  };

  const handleDietClick = () => {
    setShowViganImage(false);
    setShowDietImage(true);
  };
  return (
    <div className="customer">
      <h1> 고객센터</h1>
      <ul className="vigandiet">
        <li
          className={showViganImage ? "vigan selected" : "vigan"}
          onClick={handleViganClick}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 공지사항
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        </li>
        <li
          className={showDietImage ? "diet selected" : "diet"}
          onClick={handleDietClick}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1:1 문의
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        </li>
      </ul>
      <hr />
      <div className="customer_main">
        {showViganImage && (
          <div>
            <Announcement count={count}/>
          </div>
        )}
      </div>
      {showDietImage && (
        <>
          <Inquiry />
        </>
      )}
    </div>
  );
}

export default Custmoer;