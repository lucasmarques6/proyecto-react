import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from "../assets/loading.gif";

const AcercaDe = () => {
  return (
    <>
      <Header />
      <h1>Nuestro trabajo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure
        incidunt aliquid assumenda cum placeat inventore, ab nisi laboriosam a
        illum animi quasi repellendus ut vitae necessitatibus tempore earum
        rerum!
      </p>
      <img
        src={loading}
        alt="gif"
        style={{ display: "block", margin: "0 auto" }}
      />
      <Footer />
    </>
  );
};

export default AcercaDe;
