import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar></Navbar>
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet></Outlet>}
      </section>
    </>
  );
};

export default Home;
