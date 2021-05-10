import React from "react";

const UrunDetayResim = ({ detay }) => {
  return (
    <React.StrictMode>
      <div class="card">
        <article class="gallery-wrap">
          <div class="img-big-wrap">
            <div>
              {" "}
              <a href="#">
                <img src={detay.resim_id} />
              </a>
            </div>
          </div>
          <div class="thumbs-wrap">
            <a href="#" class="item-thumb">
              {" "}
              <img src="images/items/15.jpg" />
            </a>
            <a href="#" class="item-thumb">
              {" "}
              <img src="images/items/15-1.jpg" />
            </a>
            <a href="#" class="item-thumb">
              {" "}
              <img src="images/items/15-2.jpg" />
            </a>
            <a href="#" class="item-thumb">
              {" "}
              <img src="images/items/15-1.jpg" />
            </a>
          </div>
        </article>
      </div>
    </React.StrictMode>
  );
};

export default UrunDetayResim;
