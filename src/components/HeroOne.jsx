import React from "react";
import { useTranslation } from "react-i18next";
export default function HeroOne() {
  const { t } = useTranslation('translation');
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/background.png)" }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white"></span>
              
              <h1 className="hero-title text-white">
                <span>
                  <img src="assets/img/hero/hero_shape_1.png" alt="Fixturbo" />
                  {t('hero.span')}
                </span>{" "}
                {t('hero.subTitle')}{" "}
                {t('hero.title')}
              </h1>
              <p className="hero-text text-white">
              {t('hero.text')}
              </p>
              <div className="btn-group">
                <a href="#about" className="btn">
                  {t('hero.buttons.learnAboutUs')}
                </a>
                <a href="#services" className="btn style-border">
                  {t('hero.buttons.ourServices')}
                </a>
              </div>
              <br></br>
            </div>
          </div>
          <div className="col-xl-6" style={{overflow: 'hidden'}}>
            <div className="hero-thumb text-center" >
              <img src="assets/img/hero/mecanicos.png" alt="Fixturbo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
