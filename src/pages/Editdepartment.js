import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editdepartment() {
  const [departmentname, setDepartmentname] = useState("");
  const [employeename, setEmployeename] = useState("");
  const navigate = useNavigate();
  const obj = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/departments/update-employee/${obj.id}`)
      .then((res) => {
        if (res.status === 200) {
          setDepartmentname(res.data.departmentname);
          setEmployeename(res.data.employeename);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.error("Error updating data:", err);
      });
  }, [obj.id]);

  const handleSubmit = (e) => {
    const newData = { departmentname, employeename };
    axios
      .put(
        `http://localhost:5001/departments/update-employee/${obj.id}`,
        newData
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Department has been updated");
          navigate("/departments");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.error("Error updating data:", err);
      });
    e.preventDefault();
  };

  return (
    <div>
      <div id="signup">
        <h1 id="heading">Update Department details</h1>
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

export default Editdepartment;
