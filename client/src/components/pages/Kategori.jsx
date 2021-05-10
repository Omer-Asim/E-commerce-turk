import React from "react";

const Kategori = () => {
  return (
    <React.StrictMode>
      <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link pl-0" data-toggle="dropdown" href="#">
                  <strong>
                    {" "}
                    <i class="fa fa-bars"></i> &nbsp; Tüm Kategoriler
                  </strong>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Foods and Drink
                  </a>
                  <a class="dropdown-item" href="#">
                    Home interior
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Category 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Category 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Category 3
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Giyim || Moda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SüperMarket
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Elektronik
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Bebek &amp; Oyuncak
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Spor Aletleri
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Kıyafet
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mobilya
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.StrictMode>
  );
};

export default Kategori;
