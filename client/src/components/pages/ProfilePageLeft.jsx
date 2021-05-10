import React from "react";

const ProfilePageLeft = () => {
  return (
    <React.StrictMode>
      <aside class="col-md-3">
        <nav class="list-group">
          <a class="list-group-item active" href="page-profile-main.html">
            {" "}
            Account overview{" "}
          </a>
          <a class="list-group-item" href="page-profile-address.html">
            {" "}
            My Address{" "}
          </a>
          <a class="list-group-item" href="page-profile-orders.html">
            {" "}
            My Orders{" "}
          </a>
          <a class="list-group-item" href="page-profile-wishlist.html">
            {" "}
            My wishlist{" "}
          </a>
          <a class="list-group-item" href="page-profile-seller.html">
            {" "}
            My Selling Items{" "}
          </a>
          <a class="list-group-item" href="page-profile-setting.html">
            {" "}
            Settings{" "}
          </a>
          <a class="list-group-item" href="page-index-1.html">
            {" "}
            Log out{" "}
          </a>
        </nav>
      </aside>
    </React.StrictMode>
  );
};

export default ProfilePageLeft;
