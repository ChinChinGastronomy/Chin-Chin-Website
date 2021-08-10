import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useMediaQuery } from "react-responsive";
import "../App.css";

import AboutSection from "../components/about section/AboutSection";
import Banner from "../components/hero/Banner";
import NewHero from "../components/hero/NewHero";
import MenuSection from "../components/SectionMenu/MenuSection";
import AlaCarte from "../components/menues/AlaCarte";
import EnquireFormAndTrading from "../components/Enquires&Hours/EnquireFormAndTrading";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";

import Map from "../components/map/Map2";

const HomePage = () => {
  const { sections, events } = useContext(GlobalContext);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <Fragment>
      <Navbar />
      <NewHero />
      <Banner
        title="Chin Chin Gastronomy"
        subtitle="Our Mission is to exceed your culinary expectations with our
World fusion fine dining cusine, Book Now"
      />
      <AboutSection />

      <div className={isMobile ? "show" : "not-show"}>
        <h1 className="newSection">Menus</h1>
        <hr />
      </div>

      {sections.map((section, id) => {
        return (
          <MenuSection
            key={id}
            title={section.title}
            desc={section.description}
            pdf={section.menuPdf}
            images={section.images}
          />
        );
      })}
      <AlaCarte events={events} />
      <EnquireFormAndTrading />
      <Map />

      <Footer />
    </Fragment>
  );
};

export default HomePage;
