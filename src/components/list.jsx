import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLocationArrow,
  faTruck,
  faSquare,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

const list = [
  {
    uno: "Monday¨",
    dos: "10° 2:28",
    tres: "PM"
  },
  {
    dos: (
      <FontAwesomeIcon
        icon={faLocationArrow}
        size="1x"
        className="arrowIco ico"
      />
    )
  },
  {
    uno: "Houston, TX, 33619",
    dos: <FontAwesomeIcon icon={faCheck} size="3x" className="checkIco ico" />,
    tres: "Atlanta, GA, 30123"
  },
  {
    uno: <FontAwesomeIcon icon={faTruck} size="6x" className="truckIco ico" />,
    dos: "$250.00",
    tres: <FontAwesomeIcon icon={faSquare} className="Square ico" />,
    cautro: (
      <FontAwesomeIcon icon={faEllipsisV} size="5x" className="truckIco ico" />
    )
  }
];

export default class List extends Component {
  render() {
    return (
      <div className="secundary">
        <ul>
          {list.map(item => (
            <li key={item.uno}>
              <p>{item.uno}</p>
              <p>{item.dos}</p>
              <p>{item.tres}</p>
              <p>{item.year}</p>
            </li>
          ))}
        </ul>
        <style jsx>
          {`
            .secundary {
              background: white;
              width: auto;
              height: auto;
              padding: 10px 20px;
              border-radius: 20px;
              font-size: 15px;
              line-height: 1.63;
            }
            .secundary ul li {
              padding-right: 2rem;
              display: table-cell;
              padding-left: 0.9em;
            }
            .secundary ul li a {
              text-decoration: none;
            }
            .secundary p {
              color: #cacaca;
              margin: -0.4em 0 0 0;
              font-size: small;
              font-weight: 500;
              text-align: center;
              padding-right: inherit;
            }
            .ico {
              margin: 0 auto;
              height: 30px;
              font-size: 2rem;
            }
            .checkIco {
              color: #ee8d38;
            }
            .secundary p .arrowIco {
              margin: 0 1rem;
              text-align: center;
              overflow: auto;
              display: flex;
              justify-content: center;
              padding-right: 0;
            }
            .truckIco {
            }
            .Square {
              color: red;
            }
            .secundary ul li:first-child {
              border-right: 2px solid #cacaca;
            }
            .secundary ul li:last-child {
              display: -webkit-inline-box;
              padding-right: 2rem;
              padding-left: 0.9em;
              float: right;
              margin-top: -3rem;
              border-left: 2px solid #cacaca;
            }
            .secundary ul li:last-child p {
              font-size: 2rem;
            }
          `}
        </style>
      </div>
    );
  }
}
