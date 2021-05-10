import React, { useState } from "react";
import axios from "axios";

const YeniUrunler = () => {
  const [yeni, setYeni] = useState([]);
  axios.get("http://localhost:8081/api/yeniurunler").then((gelenVeri) => {
    setYeni(gelenVeri.data);
  });
  return (
    <React.StrictMode>
      <section class="section-name  padding-y-sm">
        <div class="container">
          <header class="section-heading">
            <a href="#" class="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 class="section-title">Yeni Ürünler</h3>
          </header>

          <div class="row">
            <div class="col-md-12">
              <div className="d-flex">
                {yeni.map((data) => {
                  return (
                    <React.StrictMode>
                      <div
                        href="#"
                        class="card card-product-grid mx-2"
                        style={{ width: "30vh" }}
                      >
                        <a href={`/urun/${data.id}`} class="img-wrap">
                          {" "}
                          <img src={data.resim_id} />{" "}
                        </a>
                        <figcaption class="info-wrap">
                          <a href="#" class="title">
                            {data.isim}
                          </a>
                          <div class="price mt-1">${data.ind_fiyat}</div>
                        </figcaption>
                      </div>
                    </React.StrictMode>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default YeniUrunler;
