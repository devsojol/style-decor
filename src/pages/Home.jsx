import React from "react";
import Banner from "../components/Banner";
import CoverageMap from "../components/CoverageMap";

const Home = () => {
  return (
    <div className="py-6">
      <Banner></Banner>
      <CoverageMap></CoverageMap>
    </div>
  );
};

export default Home;
