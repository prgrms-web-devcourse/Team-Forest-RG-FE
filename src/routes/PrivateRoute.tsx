import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthState } from "@/recoil/state/authState";

function RequireAuth() {
  const isAuth = useRecoilValue(isAuthState);
  const location = useLocation();
  console.log("PrivateRoute에서 location", location);
  console.log(
    isAuth
      ? `로그인 되어 ${location.pathname}로 이동합니다.`
      : `${location.pathname}은 로그인이 필요합니다.`
  );
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
