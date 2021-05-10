import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryInfo from "./components/pages/CategoryInfo";
import CategoryPage from "./components/public/CategoryPage";
import HomePage from "./components/public/HomePage";
import ProfilePage from "./components/public/ProfilePage";
import Register from "./components/public/Register";
import Sepetim from "./components/public/Sepetim";
import SignIn from "./components/public/SignIn";
import UrunDetay from "./components/public/UrunDetay";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/urun/:id">
      <UrunDetay />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/SignIn">
      <SignIn />
    </Route>
    <Route path="/category/:kategori_url">
      <CategoryPage />
    </Route>
    <Route path="/sepet">
      <Sepetim />
    </Route>
    <Route path="/profil">
      <ProfilePage />
    </Route>
  </Router>,
  document.getElementById("root")
);
