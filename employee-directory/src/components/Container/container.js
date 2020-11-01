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
    headings: [
      { name: "profile" },
      { name: "name" },
      { name: "phone" },
      { name: "email" },
      { name: "dob" },
    ],
  });

  useEffect(() => {
    API.getUsers().then((results) => {
      console.log("console test 1" + results.data.results);
      setEmpState({
        ...empState,
        employees: results.data.results,
        filteredEmp: results.data.results,
      });
    });
  }, []);

  function sortByName() {
    const filtered = empState.filteredEmp;
    if (empState.order === "asc") {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      empState.setState({
        filteredEmp: sorted,
        order: "desc",
      });
    } else {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      empState.setState({
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
    this.setState({
      filteredEmployees,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (!empState.search) {
      alert("Please enter an employee's name.");
    }
    const { employees, search } = this.empState;
    const filteredEmployees = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({
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

//API
//   useEffect(() => {
//     API.getUsers()
//       .then((result) => {
//         console.log("User data" + JSON.stringify(result.data.results[0].name));
//         console.log("empState" + JSON.stringify(employeeState)); //All data
//         setEmployeeState({ ...employeeState, users: result.data.results });
//       })
//       .catch((err) => console.log(err));
//   }, []);
