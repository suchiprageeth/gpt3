import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Features,
} from "./containers";
import { CallToAction, Brand, NavBar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
