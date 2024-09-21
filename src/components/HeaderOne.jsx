import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeaderOne = () => {
  const [scroll] = useState(false);

  const { t } = useTranslation('translation');
  const handleOpenMap = () => {
    const address = "Primera Transversal 2635, Maipú, Chile";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };
  return (
    <>
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center align-items-center text-center gy-2">
              <div className="col-12 col-lg-auto d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <div className="header-links">
                  <ul className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    {/* <li className="me-lg-4 mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
                      <i className="fas fa-envelope me-2" />
                      <Link to="mailto:mauriciojofre.alpacifico80@gmail.com">{t('footer-area.contact.email')}</Link>
                    </li> */}
                    <li onClick={handleOpenMap} className="me-lg-4 mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
                      <i className="fas fa-map-marker-alt me-2" />
                      {t('footer-area.contact.address')}
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      <i className="fas fa-clock me-2" />
                      {t('header.hours')}
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                      {t('header.hours2')}
                    </li>
                  </ul>
                </div>
                {/* <div className="social-links ms-auto mt-3 mt-lg-0 d-flex justify-content-center">
                  <Link to="https://www.facebook.com/jofrealpacifico" className="me-3">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://www.instagram.com/jofrealpacifico" className="me-3">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.tiktok.com/@jofrealpacifico">
                    <i className="fab fa-tiktok" />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={`sticky-wrapper ${scroll ? "sticky" : ""}`}>
          <div className="menu-area">
            <div className="header-navbar-logo">
              <Link to="/">
                <img src="assets/img/logo_jofre.png" alt="Fixturbo" />
              </Link>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xl-none d-block">
                  <Link to="/">
                    <img src="assets/img/logo_jofre.png" alt="Fixturbo" />
                  </Link>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    {/* <ul>
                      <li>
                        <Link to="/">{ }</Link>
                      </li>
                      <li className="d-none">
                        <NavLink to="/about">{t('header.buttons.about')}</NavLink>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="/service">{t('header.buttons.services')}</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink to="/service">Service</NavLink>
                          </li>
                          <li>
                            <NavLink to="/service-details">Service Details</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="#">Projects</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink to="/project">Projects</NavLink>
                          </li>
                          <li>
                            <NavLink to="/project-details">Projects Details</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink to="/blog">Blog</NavLink>
                          </li>
                          <li>
                            <NavLink to="/blog-details">Blog Details</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink to="/team">Team Page</NavLink>
                          </li>
                          <li>
                            <NavLink to="/team-details">Team Details</NavLink>
                          </li>
                          <li>
                            <NavLink to="/shop">Shop Page</NavLink>
                          </li>
                          <li>
                            <NavLink to="/shop-details">Shop Details</NavLink>
                          </li>
                          <li>
                            <NavLink to="/cart">Cart</NavLink>
                          </li>
                          <li>
                            <NavLink to="/checkout">Checkout</NavLink>
                          </li>
                          <li>
                            <NavLink to="/wishlist">Wishlist</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="d-none">
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                    </ul> */}
                  </nav>
                </div>
                {/* Remove or comment out the mobile menu button */}
                {/* <div className="navbar-right d-inline-flex d-lg-none">
                  <button type="button" className="menu-toggle icon-btn" onClick={mobileMenu}>
                    <i className="fas fa-bars" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
