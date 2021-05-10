import React from "react";

const Kampanya = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <section className="padding-bottom">
          <div className="card card-deal">
            <div className="col-heading content-body">
              <header className="section-heading">
                <h3 className="section-title">Süper Fiyat, Süper Teklif</h3>
                <p>Hygiene equipments</p>
              </header>
              <div className="timer">
                <div>
                  {" "}
                  <span className="num">04</span> <small>Days</small>
                </div>
                <div>
                  {" "}
                  <span className="num">12</span> <small>Hours</small>
                </div>
                <div>
                  {" "}
                  <span className="num">58</span> <small>Min</small>
                </div>
                <div>
                  {" "}
                  <span className="num">02</span> <small>Sec</small>
                </div>
              </div>
            </div>
            <div className="row no-gutters items-wrap">
              <div className="col-md col-6">
                <figure className="card-product-grid card-sm">
                  <a href="#" className="img-wrap">
                    <img src="images/items/3.jpg" />
                  </a>
                  <div className="text-wrap p-3">
                    <a href="#" className="title">
                      Summer clothes
                    </a>
                    <span className="badge badge-danger"> -20% </span>
                  </div>
                </figure>
              </div>
              <div className="col-md col-6">
                <figure className="card-product-grid card-sm">
                  <a href="#" className="img-wrap">
                    <img src="images/items/4.jpg" />
                  </a>
                  <div className="text-wrap p-3">
                    <a href="#" className="title">
                      Some category
                    </a>
                    <span className="badge badge-danger"> -5% </span>
                  </div>
                </figure>
              </div>
              <div className="col-md col-6">
                <figure className="card-product-grid card-sm">
                  <a href="#" className="img-wrap">
                    <img src="images/items/5.jpg" />
                  </a>
                  <div className="text-wrap p-3">
                    <a href="#" className="title">
                      Another category
                    </a>
                    <span className="badge badge-danger"> -20% </span>
                  </div>
                </figure>
              </div>
              <div className="col-md col-6">
                <figure className="card-product-grid card-sm">
                  <a href="#" className="img-wrap">
                    <img src="images/items/6.jpg" />
                  </a>
                  <div className="text-wrap p-3">
                    <a href="#" className="title">
                      Home apparel
                    </a>
                    <span className="badge badge-danger"> -15% </span>
                  </div>
                </figure>
              </div>
              <div className="col-md col-6">
                <figure className="card-product-grid card-sm">
                  <a href="#" className="img-wrap">
                    <img src="images/items/7.jpg" />
                  </a>
                  <div className="text-wrap p-3">
                    <a href="#" className="title text-truncate">
                      Smart watches
                    </a>
                    <span className="badge badge-danger"> -10% </span>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.StrictMode>
  );
};

export default Kampanya;
