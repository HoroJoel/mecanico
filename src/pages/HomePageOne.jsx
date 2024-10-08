import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";
import HeroOne from "../components/HeroOne";
import CounterOne from "../components/CounterOne";
import AboutOne from "../components/AboutOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import MarqueeOne from "../components/MarqueeOne";
import PortfolioOne from "../components/PortfolioOne";
import PricingPlanOne from "../components/PricingPlanOne";
import TeamAreaOne from "../components/TeamAreaOne";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import ProcessAreaOne from "../components/ProcessAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import BlogAreaOne from "../components/BlogAreaOne";
import FooterAreaOne from "../components/FooterAreaOne";
import SubscribeOne from "../components/SubscribeOne";
import Preloader from "../helper/Preloader";
import { useTranslation } from 'react-i18next';
import '../i18n';

const HomePageOne = () => {
  const { i18n } = useTranslation('translation');

  // Detección automática del idioma
  useEffect(() => {
    const userLang = navigator.language ;
    const detectedLang = userLang.split('-')[0]; // Ejemplo: 'es-ES' -> 'es'
    i18n.changeLanguage(detectedLang); // Cambia el idioma basado en el navegador
  }, [i18n]);

  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}
      
      {/* Header one */}
      <HeaderOne />
      
      {/* Hero One */}
      <HeroOne />
      
      {/* Counter One */}
      <CounterOne />

      {/* About One */}
      <AboutOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Marquee One */}
      <MarqueeOne />

      {/* Portfolio One */}
      <PortfolioOne />

      {/* Pricing Plan One */}
      <PricingPlanOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne  />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/* Faq Area One */}
      <FaqAreaOne />

      {/* Blog Area One */}
      <BlogAreaOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default HomePageOne;
