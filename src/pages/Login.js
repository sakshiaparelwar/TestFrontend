import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [department, setDepartment] = useState();

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // console.log(name, phone, email, password, department);
    const url = "https://testbackend-31vt.onrender.com/employees/log-in";
    const obj = { name, phone, email, password, department };
    axios
      .post(url, obj)
      .then((res) => {
        // console.log(res);
        alert(res.data.message);
        if (res.data.message) {
          localStorage.setItem("Token", res.data.token);
          navigate("/view");
        } else {
          alert("PLease try login again");
        }
      })
      .catch((err) => {
        alert("Please enter your details correctly");
      });

    event.preventDefault();
  };
  return (
    <>
      <div id="signup">
        <h1 id="heading">Log In</h1>
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
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            placeholder="Enter your Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </>
  );
}

export default Login;
