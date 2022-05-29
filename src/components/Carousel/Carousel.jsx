import React, { Suspense, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Kitob1 } from "./Kitob1";
import style from "./Carousel.module.css";
import { Kitob2 } from "./Kitob2";
import { Kitob3 } from "./kitob3";
import { Kitob4 } from "./kitob4";
import { Katalog } from "../Katalog/Katalog";
import { Magazin } from "../magazin/Magazin";
import { Dastafka } from "../dostafka/Dastafka";
import { Network } from "../network/Network";
import AOS from "aos";
import "aos/dist/aos.css";
export const Carousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className={style.Navbar}>
        <h1  data-aos="fade-up" data-aos-duration="1000">Горячие поступления </h1>
        <div className={style.Navlink}>
          <NavLink to="/">Фантастика</NavLink>
          <NavLink to="badiy">Саморазвитие</NavLink>
          <NavLink to="detektiv">Детективы</NavLink>
          <NavLink to="bolalar">Детские</NavLink>
        </div>
      </div>
      <Carousel2  />
      <h1 className={style.h1} data-aos="fade-up" data-aos-duration="1000">Горячие поступления </h1>
      <Kitob3 />
      <Katalog />
      <Magazin/>
      <Dastafka/>
      <Network/>
    </div>
  );
};
export const Carousel2 = () => {
  return (
    <div>
      <Routes>
        {" "}
        <Route
          path={"/"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob1 />
            </Suspense>
          }
        />
        <Route
          path={"badiy"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob2 />
            </Suspense>
          }
        />
        <Route
          path={"detektiv"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob3 />
            </Suspense>
          }
        />
        <Route
          path={"bolalar"}
          element={
            <Suspense fallback={<>loading..</>}>
              <Kitob4 />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
