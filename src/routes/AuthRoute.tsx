import { useEffect, useState } from "react";
import { Outlet, Route, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "@/recoil/state/authState";
import { useUserActions } from "@/recoil/actions/auth";

function AuthRoute() {
  const userAction = useUserActions();
  const token = useRecoilValue(tokenState);
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log(location);
      await userAction.authUser(token);
      setLoading(false);
    })();
  }, [userAction.authUser]);

  if (loading) {
    return null;
  }
  return <Outlet />;
}

export default AuthRoute;
