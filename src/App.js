import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Alert from "./Components/Alerts/Alert";
import Slider from "./Components/BlogSlider/Slider";
import Footer from "./Components/Footer/Footer";
import HomeNav from "./Components/Navbars/HomeNav";
import UserNav from "./Components/Navbars/UserNav"; // Used for [Login page], [Create Blog Page] and [Read Blogs Page] only
import Failure from "./Components/Payment_redirect/Failure";
import Success from "./Components/Payment_redirect/Success";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import BlogPageBody from "./Page_Components/BlogPage/BlogPage";
import CreateBlogBody from "./Page_Components/CreateBlog/CreateBlog";
import About from "./Page_Components/Home/About/About";
import HeroImg from "./Page_Components/Home/HeroSections/HeroImg";
import Products from "./Page_Components/Home/HeroSections/Products";
import Intro from "./Page_Components/Home/Introduction/Intro";
import { LoadingScreen } from "./Page_Components/Home/LoadingScreen/LoadingScreen";
import LoginBody from "./Page_Components/Login/Login";
import PrivacyPageBody from "./Page_Components/PrivacyPage/Privacy";
import ReadBlogsBody from "./Page_Components/ReadBlog/ReadBlog";
import RefundPageBody from "./Page_Components/RefundPage/RefundPage";
import RegistrationForm from "./Page_Components/ServicePage/MainServicePage/RegistrationForm";
import ServiceBody from "./Page_Components/ServicePage/MainServicePage/ServiceBody";
import ServicePageHero from "./Page_Components/ServicePage/MainServicePage/ServicePageHero";
import ServicesDisplayBody from "./Page_Components/ServicePage/ServicesDisplayPage/ServicesDisplay";

import TermsAndConditionPageBody from "./Page_Components/TermsConditionPage/TermsCondition";

// const axios = require('axios');
// axios.defaults.baseURL = "https://valscobackendtest.onrender.com"
// axios.defaults.baseURL = "http://localhost:5000"

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  const [alertMsg, setAlertMsg] = useState(localStorage.getItem("alertMsg"));
  const [alertColor, setAlertColor] = useState(
    localStorage.getItem("alertColor")
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 4000);
  }, []);
  const homeNav = [
    { title: "Products", link: "products", type: "Link" },
    { title: "About Us", link: "about", type: "Link" },
    { title: "Blogs", link: "/BlogHome", type: "NavLink" },
    { title: "Courses", link: "/Courses", type: "NavLink" },
    { title: "Contact Us", link: "contactuspage", type: "Link" },
  ];

  const coursesNav = [
    { title: "Home", link: "/", type: "NavLink" },
    { title: "Blogs", link: "/BlogHome", type: "NavLink" },
    { title: "Contact Us", link: "contactuspage", type: "Link" },
  ];
  const serviceNav = [
    { title: "Home", link: "/", type: "NavLink" },
    { title: "Courses", link: "/Courses", type: "NavLink" },
    { title: "Contact Us", link: "contactuspage", type: "Link" },
    { title: "Register", link: "/RegisterCourse", type: "NavLink" },
  ];
  const policyNav = [
    { title: "Home", link: "/", type: "NavLink" },
    { title: "Blogs", link: "/BlogHome", type: "NavLink" },
    { title: "Courses", link: "/Courses", type: "NavLink" },
  ];

  const linksList = [homeNav, coursesNav, serviceNav, policyNav];
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLoadingComplete ? (
                <LoadingScreen />
              ) : (
                <>
                  <HomeNav linksList={linksList[0]} />
                  <Intro />
                  <HeroImg />
                  <Products />
                  <Slider authenticated={authenticated} />
                  <About />
                  <Footer />
                </>
              )}
            </>
          }
        />

        <Route
          path="/PrivacyPage"
          element={
            <>
              <HomeNav linksList={linksList[3]} />
              <PrivacyPageBody />
            </>
          }
        />
        <Route
          path="/RefundPolicy"
          element={
            <>
              <HomeNav linksList={linksList[3]} />
              <RefundPageBody />
            </>
          }
        />
        <Route
          path="/T&C"
          element={
            <>
              <HomeNav linksList={linksList[3]} />
              <TermsAndConditionPageBody />
            </>
          }
        />

        <Route
          path="/BlogHome"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <ReadBlogsBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/CreateBlog"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <CreateBlogBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <LoginBody
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/BlogPage/:ID"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <BlogPageBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/Courses"
          element={
            <>
              <HomeNav linksList={linksList[1]} />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <ServicesDisplayBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/Service"
          element={
            <>
              <HomeNav linksList={linksList[2]} />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <div className="service-main-body">
                <ServiceBody
                  formVisible={true}
                  authenticated={authenticated}
                  alertMsg={alertMsg}
                  setAlertMsg={setAlertMsg}
                  alertColor={alertColor}
                  setAlertColor={setAlertColor}
                />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/RegisterCourse"
          element={
            <>
              <HomeNav linksList={linksList[2]} />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <div className="service-main-body">
                <ServiceBody
                  formVisible={true}
                  authenticated={authenticated}
                  alertMsg={alertMsg}
                  setAlertMsg={setAlertMsg}
                  alertColor={alertColor}
                  setAlertColor={setAlertColor}
                />
              </div>
              <Footer />
            </>
          }
        />

        <Route exact path="/success" element={<Success />} />
        <Route exact path="/failure" element={<Failure />} />
      </Routes>
    </Router>
  );
}

export default App;
