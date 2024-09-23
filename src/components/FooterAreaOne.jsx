import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { URL_WSP } from "../const"
export default function FooterAreaOne() {
  const { t } = useTranslation('translation');
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div style={{ display: "none" }} className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li >
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/contact">Faq</Link>
                    </li>
                    <li>
                      <Link to="/contact">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ display: "none" }} className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service">Mechanic Masters</Link>
                    </li>
                    <li>
                      <Link to="/service">Speedy Auto Repair</Link>
                    </li>
                    <li>
                      <Link to="/service">Mobile Car Repair</Link>
                    </li>
                    <li>
                      <Link to="/service">Pro Auto Fix</Link>
                    </li>
                    <li>
                      <Link to="/service">Precision Auto Works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">{t('footer-area.contact.title')}</h3>
                <div className="widget-contact">
                  <p>
                    <Link to={URL_WSP}>
                      {t('footer-area.contact.phone')}
                    </Link>
                  </p>
                  <p>
                    <Link to={t('footer-area.contact.email')}>{t('footer-area.contact.email')}</Link>
                  </p>
                  <p>
                    <Link to="https://maps.app.goo.gl/bakKHprhDthBcVAU9">{t('footer-area.contact.address')}</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto" style={{ display: "none" }}>
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">{t('footer-area.newsletter.title')}</h3>
                <p className="footer-text mb-50">
                </p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder={t('footer-area.newsletter.placeholderEmail')}
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                {t('footer-area.copyright.text')}
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="#">{t('footer-area.copyright.terms')}</Link>
                <Link to="#">{t('footer-area.copyright.privacyPolicy')}</Link>
                <Link to="#">{t('footer-area.copyright.contactUs')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

