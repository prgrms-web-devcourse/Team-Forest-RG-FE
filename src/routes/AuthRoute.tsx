import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "@/recoil/state/authState";
import { useUserActions } from "@/recoil/actions/auth";

function AuthRoute() {
  const userAction = useUserActions();
  const token = useRecoilValue(tokenState);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
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
