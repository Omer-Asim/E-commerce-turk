import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

const YorumEkle = () => {
  const parametreler = useParams();
  function YorumEkle(event) {
    var isim = event.target.isim.value;
    var icerik = event.target.icerik.value;
    var kullanici_id = "12321321";
    var yildiz = event.target.yildiz.value;
    var onay = "0";
    var urun_id = parametreler.id;

    axios.post("http://localhost:8081/api/yorumekle", {
      urun_id: urun_id,
      isim: isim,
      icerik: icerik,
      kullanici_id: kullanici_id,
      yildiz: yildiz,
      onay: onay,
    });

    event.preventDefault();
  }
  return (
    <React.StrictMode>
      <div className="container" style={{ width: "100vw" }}>
        <div className="">
          <h2>Yorum Ekle</h2>
        </div>
        <form onSubmit={YorumEkle} className="">
          <div className="row">
            <div className="col-md-8">
              <textarea name="icerik" id="" cols="90" rows="5"></textarea>
            </div>
            <div className="col-md-4">
              <div className="my-4">
                <button className="btn btn-danger mx-3">Yorum Ekle</button>
                <select name="yildiz" class="custom-select w-50">
                  <option value="1">1 Puan</option>
                  <option value="2">2 Puan</option>
                  <option value="3">3 Puan</option>
                  <option value="4">4 Puan</option>
                  <option value="5" selected>
                    5 Puan
                  </option>
                </select>
              </div>
            </div>
          </div>

          <input type="text" name="isim" id="" />
        </form>
      </div>
    </React.StrictMode>
  );
};

export default YorumEkle;
