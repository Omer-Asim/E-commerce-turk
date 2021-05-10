import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product_Card from "./Product_Card";

const CategoryCard = () => {
  const query = new URLSearchParams(useLocation().search);
  console.log("BULUNDUĞU SAYFA ", query.get("sayfa"));
  const parametreler = useParams();
  const [urunler, setUrunler] = useState([]);
  const [urunSayisi, setUrunSayisi] = useState(0);
  const bulunduguSayfa =
    query.get("sayfa") === null ? "1" : parseInt(query.get("sayfa"));
  console.log("URUN SAYISI", urunSayisi);
  const secim = query.get("secim") === null ? "1" : query.get("secim");
  var yaziliSecim = "Yeni Ürünler";
  if (secim === "2") {
    yaziliSecim = "Çok Satanlar";
  } else if (secim === "3") {
    yaziliSecim = "En Pahalı";
  } else if (secim === "4") {
    yaziliSecim = "En Ucuz";
  }
  const urunleriAl = () => {
    var adres =
      "http://localhost:8081/api/kategori/" +
      parametreler.kategori_url +
      "/" +
      query.get("sayfa") +
      "?secim=" +
      secim;
    axios.get(adres).then((gelenVeri) => {
      setUrunler(gelenVeri.data);
    });
  };
  /*
var adres =
      "http://localhost:8081/api/kategori/" +
      parametreler.kategori_url +
      "/" +
      query.get("sayfa")?query.get("satilma")

      const satilma = ()=>{

      }
*/

  const siralamaSecme = (e) => {
    var adres = "";
    if (e.target.value === "Yeni Ürünler") {
      adres =
        "http://localhost:3000/category/" +
        parametreler.kategori_url +
        "?sayfa=" +
        query.get("sayfa") +
        "&secim=" +
        1;
    } else if (e.target.value === "Çok Satanlar") {
      adres =
        "http://localhost:3000/category/" +
        parametreler.kategori_url +
        "?sayfa=" +
        query.get("sayfa") +
        "&secim=" +
        2;
    } else if (e.target.value === "En Pahalı") {
      adres =
        "http://localhost:3000/category/" +
        parametreler.kategori_url +
        "?sayfa=" +
        query.get("sayfa") +
        "&secim=" +
        3;
    } else if (e.target.value === "En Ucuz") {
      adres =
        "http://localhost:3000/category/" +
        parametreler.kategori_url +
        "?sayfa=" +
        query.get("sayfa") +
        "&secim=" +
        4;
    }
    window.location.href = adres;
  };
  const urunSayılari = () => {
    var adres =
      "http://localhost:8081/api/kategori/urun/sayisi/" +
      parametreler.kategori_url;
    axios.get(adres).then((gelenVeri) => {
      setUrunSayisi(gelenVeri.data.toplam);
    });
  };

  useEffect(urunleriAl, []);
  useEffect(urunSayılari, []);

  return (
    <React.StrictMode>
      <main className="col-md-9">
        <header className="border-bottom mb-4 pb-3">
          <div className="form-inline">
            <span className="mr-md-auto"> {urunSayisi} tane ürün bulundu </span>
            <select
              defaultValue={yaziliSecim}
              onChange={siralamaSecme}
              className="mr-2 form-control"
            >
              <option>Yeni Ürünler</option>
              <option>Çok Satanlar</option>
              <option>En Pahalı</option>
              <option>En Ucuz</option>
            </select>
            <div className="btn-group">
              <a
                href="#"
                className="btn btn-outline-secondary"
                data-toggle="tooltip"
                title=""
                data-original-title="List view"
              >
                <i className="fa fa-bars"></i>
              </a>
              <a
                href="#"
                className="btn  btn-outline-secondary active"
                data-toggle="tooltip"
                title=""
                data-original-title="Grid view"
              >
                <i className="fa fa-th"></i>
              </a>
            </div>
          </div>
        </header>

        <div className="row">
          {/* {cardlar.map((data) => {
            return (
              <Product_Card
                key={data.id}
                resim_id={data.resim_id}
                id={data.id}
                aciklama={data.aciklama}
                ind_fiyat={data.ind_fiyat}
                normal_fiyat={data.normal_fiyat}
              />
            );
          })} */}
          {urunler.map((data) => {
            return (
              <Product_Card
                key={data.key}
                id={data.id}
                resim_id={data.resim_id}
                ind_fiyat={data.ind_fiyat}
                aciklama={data.aciklama}
                normal_fiyat={data.normal_fiyat}
              />
            );
          })}
        </div>

        <nav className="mt-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className="page-item ">
              <a className="page-link" href="?sayfa=1">
                İlk Sayfa
              </a>
            </li>

            {bulunduguSayfa === 1 && (
              <React.StrictMode>
                <li className="page-item active">
                  <a className="page-link" href={`?sayfa=${bulunduguSayfa}`}>
                    1
                  </a>
                </li>
                {urunSayisi / 12 > 1 && (
                  <li className="page-item ">
                    <a className="page-link" href="?sayfa=2">
                      2
                    </a>
                  </li>
                )}
                {urunSayisi / 12 > 2 && (
                  <li className="page-item ">
                    <a className="page-link" href="?sayfa=3">
                      3
                    </a>
                  </li>
                )}
              </React.StrictMode>
            )}

            {bulunduguSayfa !== 1 && (
              <React.StrictMode>
                <li className="page-item ">
                  <a
                    className="page-link"
                    href={`?sayfa=${bulunduguSayfa - 1}`}
                  >
                    {bulunduguSayfa - 1}
                  </a>
                </li>

                <li className="page-item active">
                  <a className="page-link" href={`?sayfa=${bulunduguSayfa}`}>
                    {bulunduguSayfa}
                  </a>
                </li>

                {parseInt(urunSayisi / 12) > bulunduguSayfa - 1 && (
                  <li className="page-item ">
                    <a
                      className="page-link"
                      href={`?sayfa=${bulunduguSayfa + 1}`}
                    >
                      {bulunduguSayfa + 1}
                    </a>
                  </li>
                )}
              </React.StrictMode>
            )}

            <li className="page-item">
              <a
                className="page-link"
                href={`?sayfa=${parseInt(urunSayisi / 12 + 1)}`}
              >
                Son Sayfa
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </React.StrictMode>
  );
};

export default CategoryCard;
