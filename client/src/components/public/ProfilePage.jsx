import React from "react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import ProfilePageLeft from "../pages/ProfilePageLeft";
import ProfilePageRight from "../pages/ProfilePageRight";

const ProfilePage = () => {
  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <ProfilePageLeft />
            <ProfilePageRight />
          </div>
        </div>
      </section>

      <Footer />
    </React.StrictMode>
  );
};

export default ProfilePage;
