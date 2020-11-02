import React from "react";
import "./style.css";

export default function searchBar(props) {
  return (
    <>
      <div class="input-group mb-3 searchBar">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          type="text"
          className="form-control"
          placeholder="name"
          aria-label="Employee's username"
          aria-describedby="button-addon2"
        ></input>
        <div class="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={props.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
