import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function Viewdata() {
  const [employee, setEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 4;

  useEffect(() => {
    const token = localStorage.getItem("Token");
    axios
      .get("https://testbackend-31vt.onrender.com/employees", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setEmployee(response.data))
      .catch((err) => alert("Please register to view data"));

    if (!employee) {
      // User is not logged in
      return alert("Please LOGIN to access this resource");
    }
  }, [employee]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employee.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const TableRows = () => {
    return currentEmployees.map((employee) => (
      <tr key={employee._id}>
        <td>{employee.name}</td>
        <td>{employee.phone}</td>
        <td>{employee.location}</td>
        <td>{employee.email}</td>
        <td>{employee.department}</td>
      </tr>
    ));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(employee.length / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>{TableRows()}</tbody>
      </table>

      <div className="pagination">
        <div>
          <li className={currentPage === 1 ? "disabled" : currentPage}>
            <a href="#" onClick={() => paginate(currentPage - 1)}>
              Prev
            </a>
          </li>
        </div>
        <div>
          {pageNumbers.map((number) => (
            <button
              className="button"
              key={number}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <div>
          <li
            className={
              currentPage === pageNumbers.length ? "disabled" : currentPage
            }
          >
            <a href="#" onClick={() => paginate(currentPage + 1)}>
              Next
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Viewdata;
