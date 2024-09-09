import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function SubscribeOne () {
  const { t } = useTranslation('translation');
  return (
    <div className="container">
      <br />
      <div
        className="footer-top-1 bg-theme"
        style={{ backgroundImage: "url(assets/img/bg/footer-top-bg1-1.png)" }}
      >
        <div className="footer-logo logo">
          <Link to="/">
            <img src="assets\img\logo_jofre.png" alt="Fixturbo" />
          </Link>
        </div>
        <div className="call-media-wrap">
          <div className="icon">
            <img src="assets/img/icon/phone-1.svg" alt="Fixturbo" />
          </div>
          <div className="media-body">
            <h6 className="title text-white">{t('suscribeOne.call')}</h6>
            <h4 className="link">
              <a className="text-white" href="tel:+56932634617">
                +569 326 346 17
              </a>
            </h4>
          </div>
        </div>
        <div className="social-btn">
          <a href="https://www.facebook.com/jofrealpacifico">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.tiktok.com/@jofrealpacifico">
            <i className="fab fa-tiktok" />
          </a>
          <a href="https://www.instagram.com/jofrealpacifico">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};
