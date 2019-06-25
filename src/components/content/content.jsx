import React, { Component } from "react";
import Header from "../header/header";
import Circle from "../content/circle";
import Search from "../search";
import List from "../list";

export default class Content extends Component {
  render() {
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
        <div className="row">
          <div className="col-sm-1">
            <Circle />
          </div>
          <div className="col-sm-11">
            <List />
          </div>
        </div>
        <style jsx>
          {`
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
