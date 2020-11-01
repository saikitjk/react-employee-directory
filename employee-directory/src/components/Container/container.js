import React, { useEffect, useState } from "react";
import Table from "../DataTable/dataTable";
import EmployeeContext from "../../utils/EmployeeContext";
import SearchBar from "../SearchBar/searchBar";
import "./style.css";
import API from "../../utils/API";

function Container() {
  const [empState, setEmpState] = useState({
    employees: [],
    order: "",
    filteredEmp: [],
    search: "",
  });

  useEffect(() => {
    API.getUsers().then((results) => {
      //console.log("console test 1" + results.data.results);
      setEmpState({
        ...empState,
        employees: results.data.results,
        filteredEmp: results.data.results,
      });
    });
  });

  function sortByName() {
    const filtered = empState.filteredEmp;
    if (empState.order === "asc") {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      setEmpState({
        filteredEmp: sorted,
        order: "desc",
      });
    } else {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      setEmpState({
        filteredEmp: sorted,
        order: "asc",
      });
    }
  }

  const handleInputChange = (event) => {
    const employees = empState.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    setEmpState({
      filteredEmployees,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (!empState.search) {
      alert("Please enter an employee's name.");
    }
    //const { employees, search } = this.empState;
    const employees = empState.employees;
    const search = empState.search;
    const filteredEmployees = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );

    setEmpState({
      filteredEmployees,
    });
  };

  return (
    <EmployeeContext.Provider
      value={{ ...empState, sortByName, handleInputChange }}
    >
      <div>
        <SearchBar
          employee={empState.employees}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <Table results={empState.filteredEmp} sortByName={sortByName} />
      </div>
    </EmployeeContext.Provider>
  );
}

export default Container;
