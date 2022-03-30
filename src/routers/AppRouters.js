import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Redirect,
  Navigate,
} from "react-router-dom";
import Header from "../components/home page/Header";
import Login from "../components/login/Login";
// import Hero from "../components/home page/Hero";

const AppRouter = () => (
  <>
    {/* <Navigate to="/" noThrow /> */}
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Hero />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default AppRouter;
