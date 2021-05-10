import React from "react";
import { Link } from "react-router-dom";

const Product_Card = (props) => {
  return (
    <React.StrictMode>
      <div className="col-md-4">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <span className="badge badge-danger"> NEW </span>
            <img src={props.resim_id} />
            <Link className="btn-overlay" to={`/urun/${props.id}`}>
              <i className="fa fa-search-plus"></i> Quick view
            </Link>
          </div>
          <figcaption className="info-wrap">
            <div className="fix-height">
              <Link to={`/urun/${props.id}`} className="title">
                {props.aciklama}
              </Link>
              <div className="price-wrap mt-2">
                <span className="price">${props.ind_fiyat}</span>
                <del className="price-old">${props.normal_fiyat}</del>
              </div>
            </div>
            <a href="#" className="btn btn-block btn-primary">
              SEPETE EKLE
            </a>
          </figcaption>
        </figure>
      </div>
    </React.StrictMode>
  );
};

export default Product_Card;
