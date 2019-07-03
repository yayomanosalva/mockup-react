import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="center list-group-item list-group-item-action">
          <div className="form-group ">
            <label htmlFor="Search">{this.props.name}</label>
            <FontAwesomeIcon icon={faSearch} size="1x" className="SearchIco" />
            <input
              type="Search"
              className="form-control Search"
              id="Search"
              placeholder="Search"
            />
          </div>
        </div>
        <style jsx>
          {`
            .list-group-item {
              background-color: transparent;
              padding: 0.3rem 1.25rem;
              border: none;
            }
            .Search::placeholder {
              color: #cacaca;
              font-size: 1.2em;
              font-style: italic;
            }

            .Search {
              color: #cacaca;
              border: 3px solid #cacaca;
            }
            .SearchIco {
              color: #cacaca;
              font-size: 17px;
              position: absolute;
              margin-top: 40px;
              left: 40px;
            }
          `}
        </style>
      </div>
    );
  }
}
