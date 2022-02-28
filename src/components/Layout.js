import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import BodyWrapper from "./BodyWrapper";
import Menufooter from "./footer/menufooter/Menufooter";
import Logo from "./header/logoheader/Logo";
import SDT from "./header/logoheader/SDT";
import Slideshow from "./header/slideshowheader/Slideshow";
import Ngonngu from "./header/topheader/Ngonngu";
import Thoigian from "./header/topheader/Thoigian";
import { NavSiderbar } from "./NavSiderBar";
import Tuvan from "../components/footer/tuvan/Tuvan";
import Lienhefooter from "./footer/lienhefooter/Lienhefooter";
import Footerfixed from "./footer/lienhefooter/footerfixed/Footerfixed";
import BackToTopButton from "./ButtonContainer";

export const DashboardLayout = ({ children }) => {
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset >= 168) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <div className="topheader">
        <div className="container">
            <Thoigian />
            <Ngonngu />
            </div>
        </div>
        <div className="topheadertrenmenu">
        <div className="container">
<Logo />
<SDT />
</div>
</div>
<div className={scrolling ? "navbar sticky menu_bcv" : "navbar menu_bcv"} id="navbar">
<div className="container">
    <NavSiderbar />
</div>
</div>
<div className="slideshow">
    <Slideshow />
</div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
        <div className="footer">
          <Tuvan />
          <Menufooter />
          <Lienhefooter />
          <Footerfixed />
        </div>
        <BackToTopButton />
      </div>
    </BodyWrapper>
  );
};
