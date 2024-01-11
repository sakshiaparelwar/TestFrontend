const { Navigate } = require("react-router-dom");

export const Authorized = ({ children }) => {
  const token = localStorage.getItem("Token");

  if (!token) {
    return <Navigate to={"/"} replace={true} />;
  }

  return children;
};
