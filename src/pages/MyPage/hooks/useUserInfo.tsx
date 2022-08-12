import { useEffect, useState } from "react";
import user from "@/api/user";
import { UserInfoType } from "../mypageService";

type UseUserInfo = [UserInfoType | null, boolean, any];

const useUserInfo = (userId: number | null): UseUserInfo => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
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
      } catch (err) {
        setError(err);
      }
    };
    fetchUserInfo();
    setLoading(false);
  }, [userId]);
  return [userInfo, loading, error];
};

export default useUserInfo;
