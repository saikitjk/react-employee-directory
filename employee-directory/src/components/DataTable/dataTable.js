import React from "react";
import "../UserCard/userCard";

export default function dataTable(props) {
  return (
    <>
      <table className="empTable">
        <thead>
          <tr>
            <th></th>
            <th onClick={props.sortByName}>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {props.results.map((result) => (
            <tr className="table" key={result.login.uuid}>
              <td>
                {" "}
                <img
                  className="
                        "
                  src={result.picture.medium}
                  alt=""
                />
              </td>

              <td>{result.name.first + " " + result.name.last} </td>

              <td>{result.cell}</td>
              <td className="email">
                <a href={result.email}>{result.email}</a>
              </td>
              <td>{result.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
