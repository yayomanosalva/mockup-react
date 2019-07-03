import React from "react";

import Aside from "../components/aside/aside";
import Content from "../components/content/content";

const Home = ({ name }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-3">
        <Aside />
      </div>
      <div className="col-sm-9">
        <Content />
      </div>
    </div>
    <style jsx>
      {`
        body {
          background-color: #e5e5e5;
        }
      `}
    </style>
  </div>
);

export default Home;
