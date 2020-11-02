import React from "react";
import Moment from "react-moment";
import "./style.css";

export default function dataTable(props) {
  //console.log("what is " + JSON.stringify(props));
  return (
    <>
      <table className="empTable">
        <thead>
          <tr>
            <th>Avater</th>
            <th onClick={props.sortByName}>Name</th>
            <th onClick={props.sortByAge}>Age</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {props.results.map((result) => (
            <tr className="table" key={result.login.uuid}>
              <td>
                <img
                  className="avater"
                  src={result.picture.medium}
                  alt={result.name + " " + result.name.last}
                />
              </td>

              <td>{result.name.first + " " + result.name.last} </td>
              <td>{result.dob.age}</td>
              <td>{result.cell}</td>
              <td className="email">
                <a href={result.email}>{result.email}</a>
              </td>
              <td>
                <Moment format="MMM D YYYY">{result.dob.date}</Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

//
