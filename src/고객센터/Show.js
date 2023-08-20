import React from "react";
import Header from "../공통/Header";
import Gnb from "../공통/Gnb";
import Footer from "../공통/Footer";
import "./Show.css";
import Custmoer from "./Customer";

const Show  = () => {
  return (
    <div className="background">
      <div className="background_short_round">
        <Header />
        <div className="bigbox">
          <Gnb />
          <Custmoer/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Show;