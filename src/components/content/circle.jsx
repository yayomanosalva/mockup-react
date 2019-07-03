import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default class Circle extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-circle">
          <FontAwesomeIcon icon={faCheck} size="1x" />
        </button>
        <style jsx>
          {`
            .btn-circle.btn-xl {
              width: 70px;
              height: 70px;
              padding: 10px 16px;
              border-radius: 35px;
              font-size: 24px;
              line-height: 1.33;
            }
            .btn-circle {
              width: 40px;
              height: 40px;
              padding: 12px 0px;
              border-radius: 20px;
              text-align: center;
              font-size: 12px;
              line-height: 1.42857;
              margin-top: 20px;
              color: #fff;
              background-color: #ee8d38;
              border-color: #ee8d38;
            }
          `}
        </style>
      </div>
    );
  }
}
