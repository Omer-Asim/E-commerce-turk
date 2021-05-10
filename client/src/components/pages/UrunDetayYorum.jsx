import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import YorumEkle from "./YorumEkle";

const UrunDeyayYorum = () => {
  const [yorum, setYorum] = useState([]);

  const parametreler = useParams();
  function YorumlarıGetir() {
    axios
      .get("http://localhost:8081/api/yorumlar/" + parametreler.id)
      .then(function (gelenVeri) {
        setYorum(gelenVeri.data);
      });
  }
  useEffect(YorumlarıGetir, []);
  return (
    <React.StrictMode>
      <output>
        <section className="section-content padding-y bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <header className="section-heading">
                  <h3>Review components </h3>
                  <div className="rating-wrap">
                    <ul className="rating-stars stars-lg">
                      <li style={{ width: "80%" }} className="stars-active">
                        <img
                          src="bootstrap-ecommerce-html/images/icons/stars-active.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="bootstrap-ecommerce-html/images/icons/starts-disable.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                    <strong className="label-rating text-lg">
                      {" "}
                      4.5 <span className="text-muted">| 112 reviews</span>
                    </strong>
                  </div>
                </header>

                <YorumEkle />

                {yorum.map((gelenVeri) => {
                  return (
                    <React.StrictMode>
                      <article className="box mb-3">
                        <div className="icontext w-100">
                          <div className="text">
                            <span className="date text-muted float-md-right">
                              {gelenVeri.tarih}{" "}
                            </span>
                            <h6 className="mb-1">{gelenVeri.isim} </h6>
                            <ul className="rating-stars">
                              <li
                                style={{ width: `${gelenVeri.yildiz * 20}%` }}
                                className="stars-active"
                              >
                                <img
                                  src="bootstrap-ecommerce-html/images/icons/stars-active.svg"
                                  alt=""
                                />
                              </li>
                              <li>
                                <img
                                  src="bootstrap-ecommerce-html/images/icons/starts-disable.svg"
                                  alt=""
                                />
                              </li>
                            </ul>
                            <span className="label-rating text-warning">
                              {gelenVeri.yildiz > 3
                                ? "Güzel"
                                : gelenVeri.yildiz < 3
                                ? "Kötü"
                                : null}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p>{gelenVeri.icerik}</p>
                        </div>
                      </article>
                    </React.StrictMode>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </output>
    </React.StrictMode>
  );
};

export default UrunDeyayYorum;
