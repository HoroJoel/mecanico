import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export default function ServiceAreaOne (){
  const { t } = useTranslation('translation');
  return (
    <div className="service-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">{t('service.subTitle')}</span>
              <h2 className="sec-title">
                {t('service.title')}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">{t('service.services.1.title')}</Link>
                </h4>
                <p className="service-card_text">
                {t('service.services.1.description')}{" "}
                </p>
                <Link style={{ display: "none" }}  to="/service-details" className="link-btn">
                  {t('service.button.readMore')} <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">{t('service.services.2.title')}</Link>
                </h4>
                <p className="service-card_text">
                {t('service.services.2.description')}{" "}
                </p>
                <Link style={{ display: "none" }}  to="/service-details" className="link-btn">
                  {t('service.button.readMore')} <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card"> 
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/service-details">{t('service.services.3.title')}</Link>
                </h4>
                <p className="service-card_text">
                {t('service.services.3.description')}{" "}
                </p>
                <Link style={{ display: "none" }}  to="/service-details" className="link-btn">
                  {t('service.button.readMore')} <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

