import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const list = [
  {
    date: "Monday¨",
    firstname: "10° 2:28",
    lastname: "PM"
  },
  {
    date: "Houston, TX, 33619",
    firstname: <FontAwesomeIcon icon={faCheck} size="1x" className="SearchIco" />,
    lastname: "Atlanta, GA, 30123"
  }
];

export default class List extends Component {
  render() {
    return (
      <div className="secundary">
        <ul>
          {list.map(item => (
            <li key={item.date}>
              <div>{item.date}</div>
              <div>{item.firstname}</div>
              <div>{item.lastname}</div>
              <div>{item.year}</div>
            </li>
          ))}
        </ul>
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
          `}
        </style>
      </div>
    );
  }
}