import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (
    !localStorage.getItem("name") ||
    !localStorage.getItem("phoneNumber") ||
    !localStorage.getItem("email")
  ) {
    return <Navigate to="/warning" replace />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
