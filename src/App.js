import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Viewdata from "./pages/Viewdata";
import Departments from "./pages/Departments";
import CreateDepartment from "./pages/CreateDepartment";
import Editdepartment from "./pages/Editdepartment";
import { Authorized } from "./middleware/auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/view"
            element={
              <Authorized>
                <Viewdata />
              </Authorized>
            }
          />

          <Route path="/createdep" element={<CreateDepartment />} />
          <Route
            path="/departments"
            element={
              <Authorized>
                <Departments />
              </Authorized>
            }
          />
          <Route path="/edit-department/:id" element={<Editdepartment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
