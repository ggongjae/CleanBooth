// Modal.js

import React from 'react';
import './Modal.css';

const Modal = ({ onClose}) => {
  return (
    <div className={`modal-overlay ${onClose ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          x
        </button>
        <h3>개인정보 이용 동의</h3>
        <p>약관동의</p>
        <button onClick={onClose}>
          확인
        </button>
        <div className="modal-body">
        </div>
      </div>
    </div>
  );
};

export default Modal;
