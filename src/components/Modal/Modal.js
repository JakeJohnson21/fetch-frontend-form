import React, { useEffect } from "react";

function Modal({ isOpen, onClose, status }) {
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <div
      className={isOpen ? "modal__background" : "modal__hidden"}
      onClick={onClose}
    >
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        {status === "success" ? (
          <div className="modal__success_container">
            <p className="modal__success-message">
              Account successfully created!
            </p>
            <div className="modal__icon success-icon"></div>
          </div>
        ) : (
          <div className="modal__fail_container">
            <div className="modal__text-container">
              <p className="modal__message">An error occured.</p>
              <p className="modal__sub-message">Please try again.</p>
            </div>
            <div className="fail-icon modal__icon "></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
