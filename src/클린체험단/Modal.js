import React, { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button className = "viewterms_button" onClick={openModal}>약관보기</button>

      {isModalOpen && (
        <div className="Modal">
          <div className="modalBody" >
            <button id="modalCloseBtn" onClick={closeModal}>
              ✖
            </button>
            <h3>개인정보 이용 동의</h3>
            <p>약관 내용</p>
            <button className="modal_btn"onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
