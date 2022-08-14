import { useState } from "react";
import { UserInfo } from "response";
import { useQuery } from "@tanstack/react-query";
import user from "@/api/user";

type UseUserInfo = [UserInfo | null, boolean, any];

const useUserInfo = (userId: number | null): UseUserInfo => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const { isLoading, error } = useQuery(
    ["user-fetch", userId],
    () => {
      if (!userId) return new Error("UserId Is Not Exist");
      return user.getUserInfo(userId);
    },
    {
      onSuccess: (data) => {
        setUserInfo(data);
      },
    }
  );

  return [userInfo, isLoading, error];
};

export default useUserInfo;
