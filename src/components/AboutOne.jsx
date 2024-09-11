import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export default function AboutOne (){
  const { t } = useTranslation('translation');
  return (
    <div className="about-area-1 space-bottom ">
      <section id="about">
      <div className="about1-shape-img shape-mockup">
        <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="Fixturbo"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="Fixturbo"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets\img\icon\mecanico.png" alt="Fixturbo" />
              </div>
              <div className="about-img-2">
                <img src="assets\img\icon\mecanico-volkswagen.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">{t('about.subTitle')}</span>
                <h2 className="sec-title">
                  {t('about.title')}
                </h2>
                <p className="sec-text">
                  {t('about.description')}
                </p>
              </div>
              <div className="row gy-4 justify-content-xl-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-lg-auto">
                  <div className="about-year-wrap">
                    <div
                      className="about-year-mask-wrap"
                      style={{
                        maskImage: "url(assets/img/bg/about_counter-bg1-1.png)",
                      }}
                    >
                      <img src="assets/img/icon/about_icon1-1.svg" alt="Fixturbo" />
                      <h3 className="about-year-wrap-title">
                        <span className="counter-number">{t('about.experience.count')}</span>+
                      </h3>
                      <p className="about-year-wrap-text">
                      {t('about.experience.years')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-lg-6">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        {t('about.checklist.professionalService')}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />{t('about.checklist.repairService')}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        {t('about.checklist.fixRightAway')}{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        {t('about.checklist.quickEfficient')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ display: "none" }}  className="btn-wrap mt-20">
                <Link to="/about" className="btn style2 mt-xl-0 mt-20">
                {t('about.button.readMore')} <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};