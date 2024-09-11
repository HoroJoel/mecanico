import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const offCanvasNav = document.getElementById("offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    offCanvasNavSubMenu.forEach((submenu) => {
      submenu.insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    });

    const menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
      } else {
        menuExpand.forEach((expand) => {
          expand.parentElement.classList.remove("active");
        });
        this.parentElement.classList.add("active");
      }
    }

    menuExpand.forEach((expand) => {
      expand.addEventListener("click", sideMenuExpand);
    });

    window.onscroll = () => {
      setScroll(window.pageYOffset > 150);
    };

    return () => (window.onscroll = null);
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  const { t } = useTranslation('translation');

  return (
    <>
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-12 col-lg d-flex flex-column flex-lg-row align-items-center">
                <div className="header-links">
                  <ul className="d-flex flex-column flex-lg-row">
                    <li className="me-lg-4 mb-2 mb-lg-0 d-flex align-items-center">
                      <i className="fas fa-envelope me-2" />
                      <Link to="mailto:mauriciojofre.alpacifico80@gmail.com">{t('footer-area.contact.email')}</Link>
                    </li>
                    <li className="me-lg-4 mb-2 mb-lg-0 d-flex align-items-center">
                      <i className="fas fa-map-marker-alt me-2" />
                      {t('footer-area.contact.address')}
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-clock me-2" />
                      {t('header.hours')}
                    </li>
                  </ul>
                </div>
                <div className="social-links ms-auto mt-3 mt-lg-0">
                  <Link to="https://www.facebook.com/jofrealpacifico" className="me-3">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://www.instagram.com/jofrealpacifico" className="me-3">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.tiktok.com/@jofrealpacifico">
                    <i className="fab fa-tiktok" />
                  </Link>
                </div>
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
                    <ul>
                      <li>
                        <Link to="/">{t('header.buttons.home')}</Link>
                      </li>
                      <li className="d-none">
                        <NavLink
                          to="/about"
                          className={({ isActive }) => (isActive ? "active" : "")}
                        >
                          {t('header.buttons.about')}
                        </NavLink>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="/service">{t('header.buttons.services')}</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink
                              to="/service"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Service
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/service-details"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Service Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="#">Projects</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink
                              to="/project"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Projects
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/project-details"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Projects Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink
                              to="/blog"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/blog-details"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Blog Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children d-none">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu d-none">
                          <li>
                            <NavLink
                              to="/team"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Team Page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/team-details"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Team Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/shop"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Shop Page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/shop-details"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Shop Details
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/cart"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Cart
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/checkout"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Checkout
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/wishlist"
                              className={({ isActive }) => (isActive ? "active" : "")}
                            >
                              Wishlist
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="d-none">
                        <NavLink
                          to="/contact"
                          className={({ isActive }) => (isActive ? "active" : "")}
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="offcanvas-navigation"
          className={`offcanvas-menu ${active ? "active" : ""}`}
        >
          <button
            type="button"
            className="btn-close"
            onClick={mobileMenu}
          />
          <div className="offcanvas-inner">
            
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
