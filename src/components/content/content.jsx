import React, { Component } from "react";
import Header from "../header/header";
import Circle from "../content/circle";
import Search from "../search";
import List from "../list";

export default class Content extends Component {
  render() {
    const listado = (
      <div className="row">
        <div className="col-sm-1">
          <Circle />
        </div>
        <div className="col-sm-11">
          <List />
        </div>
      </div>
    );
    let stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(listado);
    }
    return (
      <div className="content">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        {/*End Row*/}
        <div className="row">
          <div className="col-sm-1">
            <Circle />
          </div>
          <div className="col-sm-11">
            <div className="col-md-6 inputs">
              <Search />
            </div>
          </div>
        </div>
        {/*End Row*/}
        {stars}
        {/*End Row*/}
        <style jsx>
          {`
            .row {
              margin-top: 1rem;
              margin-bottom: 1rem;
            }
            .content {
              padding: 0 20px;
            }
            .inputs {
              width: 350px;
              height: 90px;
              padding: 0;
              float: right;
            }
            .main {
              width: calc(100% - 200px);
              float: right;
              padding: 30px;
              position: relative;
            }
          `}
        </style>
      </div>
    );
  }
}
