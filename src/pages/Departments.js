import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Departments() {
  const token = localStorage.getItem("Token");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://testbackend-31vt.onrender.com/departments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setDepartments(response.data))
      .catch((error) => alert("Error while fetching data!!"));
  }, []);

  const handleDelete = (departmentId) => {
    axios
      .delete(
        `https://testbackend-31vt.onrender.com/departments/delete-department/${departmentId}`
      )
      .then((response) => {
        alert("Employee deleted successfully");
        axios
          .get("https://testbackend-31vt.onrender.com/departments", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setDepartments(response.data));
      })
      .catch((error) => {
        alert("Error deleting employee");
      });
  };

  const filterEmployeesByDepartment = (departmentName) => {
    return departments
      .filter((department) => department.departmentname === departmentName)
      .map((filteredDepartment) => (
        <tr key={filteredDepartment._id}>
          <td>{filteredDepartment.departmentname}</td>
          <td>{filteredDepartment.employeename}</td>
          <td>
            <Link to={`/edit-department/${filteredDepartment._id}`}>
              <button id="action">Update</button>
            </Link>

            <button
              id="action"
              onClick={() => handleDelete(filteredDepartment._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
  };

  return (
    <div>
      <div>
        <h2>Manager Department</h2>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>{filterEmployeesByDepartment("Manager")}</tbody>
        </table>
      </div>
      <div>
        <br />
        <br />
        <br />
        <h2>Development Department</h2>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>{filterEmployeesByDepartment("Development")}</tbody>
        </table>
      </div>
      <div>
        <Link to="/createdep">Create Department</Link>
      </div>
    </div>
  );
}

export default Departments;
