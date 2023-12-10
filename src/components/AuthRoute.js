import { Navigate } from "react-router-dom";
import { getToken } from "../utils/token";

export function AuthRoute({ children }) {

  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={'/login'} replace />

  }
}