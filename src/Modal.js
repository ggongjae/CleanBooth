import React from 'react';

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;