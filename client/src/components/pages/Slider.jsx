import React from "react";

const Slider = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <section className="section-main padding-y">
          <main className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9 col-xl-9 col-lg-7">
                  <div
                    id="carousel1_indicator"
                    className="slider-home-banner carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carousel1_indicator"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carousel1_indicator"
                        data-slide-to="1"
                        className=""
                      ></li>
                      <li
                        data-target="#carousel1_indicator"
                        data-slide-to="2"
                        className=""
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="https://i2.cnnturk.com/i/cnnturk/75/630x0/550fce97f6309917fc509b99.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/banners/slide2.jpg"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="images/banners/slide3.jpg"
                          alt="Third slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carousel1_indicator"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carousel1_indicator"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-xl-3 col-lg-5 d-none d-lg-block flex-grow-1">
                  <aside className="special-home-right">
                    <h6
                      className="bg-blue text-center text-white mb-0 p-2"
                      style={{ backgroundColor: "rgb(255, 96, 0)" }}
                    >
                      Popular category
                    </h6>

                    <div className="card-banner border-bottom">
                      <div className="py-3" style={{ width: "80%" }}>
                        <h6 className="card-title">Men clothing</h6>
                        <a href="#" className="btn btn-secondary btn-sm">
                          {" "}
                          Source now{" "}
                        </a>
                      </div>
                      <img
                        src="images/items/1.jpg"
                        height="80"
                        className="img-bg"
                      />
                    </div>

                    <div className="card-banner border-bottom">
                      <div className="py-3" style={{ width: "80%" }}>
                        <h6 className="card-title">Winter clothing </h6>
                        <a href="#" className="btn btn-secondary btn-sm">
                          {" "}
                          Source now{" "}
                        </a>
                      </div>
                      <img
                        src="images/items/2.jpg"
                        height="80"
                        className="img-bg"
                      />
                    </div>

                    <div className="card-banner border-bottom">
                      <div className="py-3" style={{ width: "80%" }}>
                        <h6 className="card-title">Home inventory</h6>
                        <a href="#" className="btn btn-secondary btn-sm">
                          {" "}
                          Source now{" "}
                        </a>
                      </div>
                      <img
                        src="images/items/6.jpg"
                        height="80"
                        className="img-bg"
                      />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </main>
        </section>

        <section class="section-specials padding-y border-bottom my-3 shadow">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <figure class="itemside">
                  <div class="aside">
                    <span class="icon-sm rounded-circle bg-primary">
                      <i class="fa fa-money-bill-alt white"></i>
                    </span>
                  </div>
                  <figcaption class="info">
                    <h6 class="title">Reasonable prices</h6>
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labor{" "}
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="itemside">
                  <div class="aside">
                    <span class="icon-sm rounded-circle bg-danger">
                      <i class="fa fa-comment-dots white"></i>
                    </span>
                  </div>
                  <figcaption class="info">
                    <h6 class="title">Customer support 24/7 </h6>
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labor{" "}
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-4">
                <figure class="itemside">
                  <div class="aside">
                    <span class="icon-sm rounded-circle bg-success">
                      <i class="fa fa-truck white"></i>
                    </span>
                  </div>
                  <figcaption class="info">
                    <h6 class="title">Quick delivery</h6>
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labor{" "}
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.StrictMode>
  );
};

export default Slider;
