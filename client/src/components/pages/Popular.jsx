import React, { useEffect, useState } from "react";
import axios from "axios";
import PopulerCard from "./PopulerCard";

const Popular = () => {
  const [populer, setPopuler] = useState([]);
  function populerUrunler() {
    axios
      .get("http://localhost:8081/api/populerurunler")
      .then((gelenVeri) => setPopuler(gelenVeri.data));
  }

  useEffect(populerUrunler, []);
  return (
    <React.StrictMode>
      <section class="section-name padding-y-sm">
        <div class="container">
          <header class="section-heading">
            <a href="#" class="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 class="section-title">Popüler Ürünler</h3>
          </header>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex ">
                <PopulerCard setPopuler={setPopuler} populer={populer} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Popular;
