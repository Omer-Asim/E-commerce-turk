import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import UrunDetayResim from "../pages/UrunDetayResim";
import UrunDeyayYorum from "../pages/UrunDetayYorum";

const UrunDetay = () => {
  const [detay, setDetay] = useState({
    id: "",
    isim: "",
    kategori_id: "",
    kategori_url: "",
    resim_id: "",
    stok_id: "",
    marka: "",
    aciklama: "",
    ind_fiyat: "",
    normal_fiyat: "",
    renk: "",
    parametreler_id: "",
    satilma: "",
    cinsiyet: "",
  });
  const parametreler = useParams();
  function verileriAl() {
    axios
      .get("http://localhost:8081/api/urun/detay/" + parametreler.id)
      .then((gelenVeri) => {
        setDetay(gelenVeri.data[0]);
      });
  }

  useEffect(verileriAl, []);
  return (
    <React.StrictMode>
      <Header />
      <section class="section-content bg-white padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-md-6">
              <UrunDetayResim detay={detay} />
            </aside>
            <main class="col-md-6">
              <article class="product-info-aside">
                <h2 class="title mt-3">{detay.isim}</h2>

                <div class="rating-wrap my-3">
                  <ul class="rating-stars">
                    <li style={{ width: "80%" }} class="stars-active">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <small class="label-rating text-muted">132 reviews</small>
                  <small class="label-rating text-success">
                    {" "}
                    <i class="fa fa-clipboard-check"></i> 154 orders{" "}
                  </small>
                </div>

                <div class="mb-3">
                  <var class="price h4">${detay.ind_fiyat}</var>
                  <del class="text-muted">${detay.normal_fiyat}</del>
                </div>

                <p>{detay.aciklama}</p>

                <dl class="row">
                  <dt class="col-sm-3">Manufacturer</dt>
                  <dd class="col-sm-9">
                    <a href="#">Great textile Ltd.</a>
                  </dd>

                  <dt class="col-sm-3">Article number</dt>
                  <dd class="col-sm-9">596 065</dd>

                  <dt class="col-sm-3">Guarantee</dt>
                  <dd class="col-sm-9">2 year</dd>

                  <dt class="col-sm-3">Delivery time</dt>
                  <dd class="col-sm-9">3-4 days</dd>

                  <dt class="col-sm-3">Availabilty</dt>
                  <dd class="col-sm-9">in Stock</dd>
                </dl>

                <div class="form-row  mt-4">
                  <div class="form-group col-md flex-grow-0">
                    <div class="input-group mb-3 input-spinner">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-light"
                          type="button"
                          id="button-plus"
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      <input type="text" class="form-control" value="1" />
                      <div class="input-group-append">
                        <button
                          class="btn btn-light"
                          type="button"
                          id="button-minus"
                        >
                          {" "}
                          −{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md">
                    <a href="#" class="btn btn-light mx-2">
                      <i class="fas fa-shopping-cart"></i>{" "}
                      <span class="text text-danger">Sepete Ekle</span>
                    </a>
                    <a href="#" class="btn btn-light">
                      <i class="fas fa-envelope"></i>{" "}
                      <span class="text">Contact supplier</span>
                    </a>
                  </div>
                </div>
              </article>
            </main>
          </div>

          <UrunDeyayYorum />
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};

export default UrunDetay;
