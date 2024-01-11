import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [department, setDepartment] = useState();
  const navigate = useNavigate();
  let handleSubmit = (event) => {
    console.log(name, phone, location, email, department);
    const url = "http://localhost:5001/employees/create-employee";
    const obj = { name, phone, location, email, password, department };
    axios
      .post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee added successfully");
          navigate("/login");
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
    <>
      <div id="signup">
        <h1 id="heading">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Contact</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="locationo"
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            placeholder="Enter your Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
          <span>Put Development or Manager</span>

          <input type="submit" id="submit" />
        </form>
      </div>
    </>
  );
}

export default SignIn;
