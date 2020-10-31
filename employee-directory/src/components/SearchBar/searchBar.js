import React from "react";
import "./style.css";

export default function searchBar() {
  return (
    <>
      <div class="input-group mb-3 searchBar">
        <input
          type="text"
          class="form-control"
          placeholder="name"
          aria-label="Employee's username"
          aria-describedby="button-addon2"
        ></input>
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
