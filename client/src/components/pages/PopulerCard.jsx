import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const PopulerCard = ({ setPopuler, populer }) => {
  console.log("POPULER", populer);
  return (
    <React.StrictMode>
      {populer.map((data) => {
        return (
          <React.StrictMode>
            <div
              href="#"
              className="card card-product-grid mx-2 "
              style={{ width: "80%" }}
            >
              <Link to={`/urun/${data.id}`}>
                {" "}
                className="img-wrap">
                <img src={data.resim_id} />
              </Link>
              <figcaption className="info-wrap">
                <Link to={`/urun/${data.id}`} className="title">
                  {data.isim}
                </Link>
                <div className="price mt-1">${data.ind_fiyat}</div>
              </figcaption>
            </div>
          </React.StrictMode>
        );
      })}
    </React.StrictMode>
  );
};

export default PopulerCard;
