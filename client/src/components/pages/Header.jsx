import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <React.StrictMode>
      <header className="section-header">
        <nav
          className="navbar navbar-dark navbar-expand p-0"
          style={{ backgroundColor: "rgb(255, 96, 0)", height: "7vh" }}
        >
          <div className="container">
            <ul className="navbar-nav d-none d-md-flex mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Anasayfa
                </a>
              </li>
            </ul>
            <div className="h5 text-white mx-auto ">
              150 TL VE ÜZERİ SİPARİŞİNİZDE{" "}
              <span className="h4">KARGO BEDAVA!</span>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  {" "}
                  Tel: 02244342500{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-6">
                <a href="/" className="brand-wrap">
                  <img
                    className="logo"
                    src="https://cartzilla.createx.studio/img/logo-dark.png"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-12 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn"
                        type="submit"
                        style={{ backgroundColor: "#919191" }}
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                    <a href="#" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                    <span className="badge badge-pill badge-danger notify">
                      0
                    </span>
                  </div>
                  <div className="widget-header icontext">
                    <Link
                      to="/profil"
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-user"></i>
                    </Link>
                    <div className="text">
                      <span className="text-muted">Hoşgeldiniz</span>
                      <div>
                        <Link to="/SignIn">Giriş Yap</Link> |{" "}
                        <Link to="/register"> Kayıt Ol</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </React.StrictMode>
  );
};

export default Header;
