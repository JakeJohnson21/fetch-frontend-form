import React, { useEffect } from "react";

function Modal({ isOpen, onClose, status }) {
  useEffect(() => {
    // Close modal on escape key click
    const handleEscClose = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    // listen for escape key click
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <div className={isOpen ? "modal__background" : "modal__hidden"}>
      <div
        className="modal__border"
        onClick={
          // Close modal on border click (fix bug)
          onClose
        }
      ></div>

      <div className="modal__container">
        <button
          // Close modal on click
          className="modal__close-button"
          type="button"
          aria-label="close button"
          onClick={onClose}
        ></button>
        {(() => {
          // IIFE to allow else if conditional JSX
          if (status === "success") {
            // render successful POST request (conditional)
            return (
              <div className="modal__success_container">
                <p className="modal__success-message">
                  Account successfully created!
                </p>
                <div className="modal__icon success-icon"></div>
              </div>
            );
          } else if (status === "fail") {
            // render if POST request fails (conditional)
            return (
              <div className="modal__fail_container">
                <div className="modal__text-container">
                  <p className="modal__message">An error occured.</p>
                  <p className="modal__sub-message">Please try again.</p>
                </div>
                <div className="fail-icon modal__icon "></div>
              </div>
            );
          } else if (status === "load") {
            // render fail to GET (conditional) states/occupations select data
            return (
              <div className="modal__load-error_container">
                <div className="modal__load-error_text">
                  <p className="modal__message">
                    Couldn't load all necessary resources.
                  </p>
                  <p className="modal__sub-message">
                    Please try reloading your browser.
                  </p>
                </div>
                <div className="fail-icon modal__icon "></div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Modal;
