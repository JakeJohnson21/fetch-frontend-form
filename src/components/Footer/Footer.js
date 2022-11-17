import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="copyright">Jake Johnson © 2022</p>
        <div className="credits">
          <div className="credit__item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cssgradient.io/"
              className="credit__link"
            >
              CSS Gradients
            </a>
            <p className="credit__text">
              Used to create all gradients on this site.
            </p>
          </div>
          <div className="credit__item">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.flaticon.com/free-icon/bad-feedback_5362991?term=ui%20sad%20emoji&page=1&position=69&page=1&position=69&related_id=5362991&origin=search"
              className="credit__link"
            >
              Sad Icon
            </a>
            <p className="credit__text">Icon used on error tooltip.</p>
          </div>
          <div className="credit__item">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.flaticon.com/free-icon/success_1656126?related_id=1656126&origin=search"
              className="credit__link"
            >
              Success Icon
            </a>
            <p className="credit__text">
              Icon used on successful api request tooltip.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
