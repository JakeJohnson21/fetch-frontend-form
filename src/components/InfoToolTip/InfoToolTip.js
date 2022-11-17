import React from "react";

function InfoToolTip({ isOpen, onClose, status }) {
  return (

    <div className={isOpen ? "modal__background" : "modal__hidden"}> 
      <div className="modal__container" noValidate>
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        {status === "success" ? (
                 <div>
                 <p className="modal__success-message">Account successfully created!</p>
                 <div className="modal__icon success-icon"></div>
               </div>
              
        ) : (
          <div>
          <div className="modal__text-container">
          <p className="modal__message">Uh oh. Something went wrong.</p>
          <p className="modal__sub-message">Please try again.</p>
          </div>
          <div className="fail-icon modal__icon "></div>
        </div>
     
        )}
      </div>
    </div>
  );
}

export default InfoToolTip;
