import React from "react";
import Carrousel from "./carrousel/Carrousel";
import Gallery from "./gallery/Gallery";
import "../components/gallery/gallery.css";
import NavBar from "../components/navbar/navBar";
import GridImages from "./gridImages/GridImages";
import Footer from "./footer/Fotter";
import NewsletterWithFormik from "./newsletter/newsletterWithFormik";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrousel />
      <div className="galleryContainers">
        <Gallery />
        <GridImages />
        <NewsletterWithFormik />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
