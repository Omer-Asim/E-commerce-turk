import React from "react";

const ProfilePageRight = () => {
  return (
    <React.StrictMode>
      <main className="col-md-9">
        <article className="card mb-3">
          <div className="card-body">
            <figure className="icontext">
              <div className="icon">
                <img
                  className="rounded-circle img-sm border"
                  src="images/avatars/avatar3.jpg"
                />
              </div>
              <div className="text">
                <strong> Mr. Jackson Someone </strong> <br />
                <p className="mb-2"> myloginname@gmail.com </p>
                <a href="#" className="btn btn-light btn-sm">
                  Edit
                </a>
              </div>
            </figure>
            <hr />
            <p>
              <i className="fa fa-map-marker text-muted"></i> &nbsp; My address:
              <br />
              Tashkent city, Street name, Building 123, House 321 &nbsp;
              <a href="#" className="btn-link">
                {" "}
                Edit
              </a>
            </p>

            <article className="card-group card-stat">
              <figure className="card bg">
                <div className="p-3">
                  <h4 className="title">38</h4>
                  <span>Orders</span>
                </div>
              </figure>
              <figure className="card bg">
                <div className="p-3">
                  <h4 className="title">5</h4>
                  <span>Wishlists</span>
                </div>
              </figure>
              <figure className="card bg">
                <div className="p-3">
                  <h4 className="title">12</h4>
                  <span>Awaiting delivery</span>
                </div>
              </figure>
              <figure className="card bg">
                <div className="p-3">
                  <h4 className="title">50</h4>
                  <span>Delivered items</span>
                </div>
              </figure>
            </article>
          </div>
        </article>

        <article className="card  mb-3">
          <div className="card-body">
            <h5 className="card-title mb-4">Recent orders </h5>

            <div className="row">
              <div className="col-md-6">
                <figure className="itemside  mb-3">
                  <div className="aside">
                    <img src="images/items/1.jpg" className="border img-sm" />
                  </div>
                  <figcaption className="info">
                    <time className="text-muted">
                      <i className="fa fa-calendar-alt"></i> 12.09.2019
                    </time>
                    <p>Great book name goes here </p>
                    <span className="text-success">Order confirmed </span>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="itemside  mb-3">
                  <div className="aside">
                    <img src="images/items/2.jpg" className="border img-sm" />
                  </div>
                  <figcaption className="info">
                    <time className="text-muted">
                      <i className="fa fa-calendar-alt"></i> 12.09.2019
                    </time>
                    <p>How to be rich</p>
                    <span className="text-success">Departured</span>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img src="images/items/3.jpg" className="border img-sm" />
                  </div>
                  <figcaption className="info">
                    <time className="text-muted">
                      <i className="fa fa-calendar-alt"></i> 12.09.2019
                    </time>
                    <p>Harry Potter book </p>
                    <span className="text-success">Shipped </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            <a href="#" className="btn btn-outline-primary btn-block">
              {" "}
              See all orders <i className="fa fa-chevron-down"></i>{" "}
            </a>
          </div>
        </article>
      </main>
    </React.StrictMode>
  );
};

export default ProfilePageRight;
