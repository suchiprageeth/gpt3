import React from "react";

import { google, slack, shopify, dropbox, atlassian } from "./imports";

import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={shopify} alt="shopify" />
        <img src={dropbox} alt="dropbox" />
        <img src={atlassian} alt="atlassian" />
      </div>
    </div>
  );
};

export default Brand;
