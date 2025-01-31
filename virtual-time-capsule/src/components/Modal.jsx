import React from "react";
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={imageUrl} alt="Enlarged capsule" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
