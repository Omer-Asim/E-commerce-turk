import React from "react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import Kampanya from "../pages/Kampanya";
import Kategori from "../pages/Kategori";
import Popular from "../pages/Popular";
import Slider from "../pages/Slider";
import YeniUrunler from "../pages/YeniUrunler";

const HomePage = () => {
  return (
    <React.StrictMode>
      <Header />
      <Kategori />
      <Slider />
      <Kampanya />
      <Popular />
      <YeniUrunler />
      <Footer />
    </React.StrictMode>
  );
};

export default HomePage;
