import React from "react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Register = () => {
  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y">
        <div
          className="card mx-auto"
          style={{ maxWidth: "520px", marginTop: "40px" }}
        >
          <article className="card-body">
            <header className="mb-4">
              <h4 className="card-title">Üye Ol</h4>
            </header>
            <form>
              <div className="form-row">
                <div className="col form-group">
                  <label>İsim</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col form-group">
                  <label>Soyisim</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="" />
              </div>
              <div className="form-group">
                <label className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    checked=""
                    type="radio"
                    name="gender"
                    value="option1"
                  />
                  <span className="custom-control-label"> Erkek </span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="gender"
                    value="option2"
                  />
                  <span className="custom-control-label"> Kadın </span>
                </label>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Şifre</label>
                  <input className="form-control" type="password" />
                </div>
                <div className="form-group col-md-6">
                  <label>Şifre Tekrarı</label>
                  <input className="form-control" type="password" />
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Kayıt Ol{" "}
                </button>
              </div>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked=""
                  />{" "}
                  <div className="custom-control-label">
                    {" "}
                    I am agree with <a href="#">terms and contitions</a>{" "}
                  </div>{" "}
                </label>
              </div>
            </form>
          </article>
        </div>
        <p className="text-center mt-4">
          Üyemisiniz ? <Link to="/SignIn">Giriş</Link>
        </p>
        <br />
        <br />
      </section>
      <Footer />
    </React.StrictMode>
  );
};

export default Register;
