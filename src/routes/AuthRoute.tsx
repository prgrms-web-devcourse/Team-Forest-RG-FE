import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useUserActions } from "@/recoil/actions/auth";

function AuthRoute() {
  const userAction = useUserActions();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await userAction.authUser();
      setLoading(false);
    })();
  }, [userAction.authUser]);

  if (loading) {
    return null;
  }
  return <Outlet />;
}

export default AuthRoute;
