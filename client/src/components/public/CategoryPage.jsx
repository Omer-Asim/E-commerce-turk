import React, { useEffect, useState } from "react";
import CategoryCard from "../pages/CategoryCard";
import CategoryFilter from "../pages/CategoryFilter";
import CategoryInfo from "../pages/CategoryInfo";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

const CategoryPage = () => {
  ///  /kategori/gomlek?sayfa=1&renk=mavi
  // const query = new URLSearchParams(useLocation().search);
  // console.log("BULUNDUĞU SAYFA", query.get("sayfa"));
  //query.get("sayfa")---> "1"
  //query.get("renk")---!"mavi"

  return (
    <React.StrictMode>
      <Header />
      <CategoryInfo />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <CategoryFilter />
            <CategoryCard />
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};

export default CategoryPage;
