import { Navigate } from "react-router-dom";
import { getToken } from "@/utils";

const AuthRoute = ({ children }) => {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export default AuthRoute;
