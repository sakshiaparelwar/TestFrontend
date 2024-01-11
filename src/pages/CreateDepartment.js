import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateDepartment() {
  const [departmentname, setDepartmentname] = useState();
  const [employeename, setEmployeename] = useState();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // console.log(departmentname, employeename);
    const url =
      "https://testbackend-31vt.onrender.com/departments/create-department";
    const obj = { departmentname, employeename };
    axios
      .post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Department created successfully");
          navigate("/departments");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <div>
      <div id="signup">
        <h1 id="heading">Create Department</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="DepartmentName">Department Name</label>
          <input
            type="text"
            id="DepartmentName"
            placeholder="Enter Department"
            onChange={(e) => setDepartmentname(e.target.value)}
          />
          <label htmlFor="EmployeeName">Employee Name</label>
          <input
            type="text"
            id="EmployeeName"
            placeholder="Enter Employee name"
            onChange={(e) => setEmployeename(e.target.value)}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateDepartment;
