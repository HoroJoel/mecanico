import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function PortfolioOne() {
  const [active, setActive] = useState('all');
  const { t } = useTranslation('translation');

  // Datos del portafolio
  const projects = [
    {
      id: 1,
      category: t('portfolio.filter.mechanics'),
      img: "assets/img/portfolio/1-3.png",
      title: t('portfolio.projects.1.title'),
    },
    {
      id: 2,
      category: t('portfolio.filter.security'),
      img: "assets/img/portfolio/1-4.png",
      title: t('portfolio.projects.2.title'),
    },
    {
      id: 3,
      category: t('portfolio.filter.mechanics'),
      img: "assets/img/portfolio/1-7.png",
      title: t('portfolio.projects.3.title'),
    },
    {
      id: 4,
      category: t('portfolio.filter.electricity'),
      img: "assets/img/portfolio/1-6.png",
      title: t('portfolio.projects.4.title'),
    },
    {
      id: 5,
      category: t('portfolio.filter.electricity'),
      img: "assets/img/portfolio/1-5.jpg",
      title: t('portfolio.projects.5.title'),
    },
    {
      id: 6,
      category: t('portfolio.filter.security'),
      img: "assets/img/portfolio/1-2.png",
      title: t('portfolio.projects.6.title'),
    },
    {
      id: 7,
      category: t('portfolio.filter.security'),
      img: "assets/img/portfolio/1-1.jpeg",
      title: t('portfolio.projects.7.title'),
    },
    {
      id: 8,
      category: t('portfolio.filter.electricity'),
      img: "assets/img/portfolio/1-10.jpg",
      title: t('portfolio.projects.8.title'),
    },
    {
      id: 9,
      category: t('portfolio.filter.electricity'),
      img: "assets/img/portfolio/1-11.png",
      title: t('portfolio.projects.9.title'),
    },
    {
      id: 10,
      category: t('portfolio.filter.electricity'),
      img: "assets/img/portfolio/1-9.png",
      title: t('portfolio.projects.10.title'),
    },
    {
      id: 11,
      category: t('portfolio.filter.security'),
      img: "assets/img/portfolio/1-8.png",
      title: t('portfolio.projects.11.title'),
    }
  ];

  // Manejar el cambio de categoría activa
  const handleFilterKeyChange = (category) => {
    setActive(category);
  };

  // Filtrar proyectos según la categoría activa
  const filteredProjects = active === 'all' ? projects : projects.filter(project => project.category === active);

  return (

    <div className="portfolio-area-1 space">
      <section id="services">
        <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
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
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="title-area text-center">
                <span className="sub-title">{t('portfolio.subTitle')}</span>
                <h2 className="sec-title">{t('portfolio.title')}</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="portfolio-tab-1 mb-60">
                <div className="filter-menu-active text-center">
                  <button
                    className={`${active === 'all' && "active"} btn style-border3`}
                    type="button"
                    onClick={() => handleFilterKeyChange('all')}
                  >
                    {t('portfolio.filter.all')}
                  </button>
                  <button
                    className={`${active === t('portfolio.filter.electricity') && "active"} btn style-border3`}
                    type="button"
                    onClick={() => handleFilterKeyChange(t('portfolio.filter.electricity'))}
                  >
                    {t('portfolio.filter.electricity')}
                  </button>
                  <button
                    className={`${active === t('portfolio.filter.mechanics') && "active"} btn style-border3`}
                    type="button"
                    onClick={() => handleFilterKeyChange(t('portfolio.filter.mechanics'))}
                  >
                    {t('portfolio.filter.mechanics')}
                  </button>
                  <button
                    className={`${active === t('portfolio.filter.security') && "active"} btn style-border3`}
                    type="button"
                    onClick={() => handleFilterKeyChange(t('portfolio.filter.security'))}
                  >
                    {t('portfolio.filter.security')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-30 gx-30">
            {filteredProjects.map((project) => (
              <div className="col-lg-4 filter-item" key={project.id}>
                <div className="portfolio-card image-container">
                  <div className="portfolio-card-thumb">
                    <img src={project.img} alt="Fixturbo" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <span className="portfolio-card-details_subtitle">
                        {project.category}
                      </span>
                      <h4 className="portfolio-card-details_title">
                        <Link >{project.title}</Link>
                      </h4>
                    </div>
                    <Link style={{ display: "none" }} className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
