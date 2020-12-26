import React, { Fragment } from "react";

import "../App.css";
import Banner from "../components/hero/Banner";
import NewHero from "../components/hero/NewHero";

const HomePage = () => {
  return (
    <Fragment>
      <NewHero>
        <Banner
          title="Chin Chin Gastronomy"
          subtitle="Our Mission is to exceed your culinary expectations with our
World fusion fine dining cusine, Book Now"
        ></Banner>
      </NewHero>
    </Fragment>
  );
};

export default HomePage;
