import { useEffect, useState } from "react";
import { UserInfo } from "response";
import user from "@/api/user";

type UseUserInfo = [UserInfo | null, boolean, any];

const useUserInfo = (userId: number | null): UseUserInfo => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!userId) {
          setError("UserId Is Not Exist");
          return;
        }
        const data = await user.getUserInfo(userId);
        setUserInfo(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [userId]);

  return [userInfo, loading, error];
};

export default useUserInfo;
