import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
export default function ClientAreaOne()  {
  const { t } = useTranslation('translation');
  return (
    <div
      className="client-bg-area" 
      style={{ backgroundImage: "url(assets/img/bg/client-bg1-1.png)" }}
    >
      <div className="client-area-1 text-center">
        <div className="container">
          <div className="row global-carousel">
            <Swiper
              spaceBetween={20}
              slidesPerGroup={2}
              speed={1000}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-1.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-2.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-3.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-4.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-5.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-1.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-2.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-3.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-4.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-5.png" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==============================
    Appointment Area  
    ==============================*/}
      <div className="appointment-area-1 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="appointment-form-wrap bg-theme">
                <div className="title-area">
                  <span className="sub-title text-white">{t('appointmentArea.titleArea.subTitle')}</span>
                  <h2 className="sec-title text-white">
                  {t('appointmentArea.titleArea.title')}
                  </h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="name"
                          id="name"
                          placeholder={t('appointmentArea.form.labels.name')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="email"
                          id="email"
                          placeholder={t('appointmentArea.form.labels.email')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="number"
                          id="number"
                          placeholder={t('appointmentArea.form.labels.number')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select style-border2"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose">{t('appointmentArea.form.labels.subject')}</option>
                          <option value="mechanic">{t('appointmentArea.form.serviceOptions.mechanic')}</option>
                          <option value="brakes">{t('appointmentArea.form.serviceOptions.brakes')}</option>
                          <option value="airConditioning">{t('appointmentArea.form.serviceOptions.airConditioning')}</option>
                          <option value="electrical">{t('appointmentArea.form.serviceOptions.electrical')}</option>
                          <option value="immobilizer">{t('appointmentArea.form.serviceOptions.immobilizer')}</option>
                          <option value="diagnostics">{t('appointmentArea.form.serviceOptions.diagnostics')}</option>
                        </select>
                        <i className="fas fa-angle-down text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder= {t('appointmentArea.form.labels.message')}
                      id="contactForm"
                      className="form-control style-border2"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style3">
                      {t('appointmentArea.form.button')} <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-thumb-1">
          <img
            src="assets/img/normal/appointment-thumb-1-1.png"
            alt="Fixturbo"
          />
        </div>
      </div>
    </div>
  );
};

