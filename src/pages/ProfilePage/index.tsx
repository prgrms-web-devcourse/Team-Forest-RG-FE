/* eslint-disable no-use-before-define */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UserInfo from "@/components/UserInfo";
import user from "@/api/user";
import { Container } from "./index.style";

function ProfilePage() {
  const { id: userId } = useParams();
  const [userInfo, setUserInfo] = useState<any>(null);
  const navigate = useNavigate();

  const { isLoading } = useQuery(
    ["user-fetch", userId],
    () => {
      if (!userId) return new Error("UserId Is Not Exist");
      return user.getUserInfo(Number(userId));
    },

    {
      onSuccess: (data) => {
        setUserInfo(data);
      },
      onError: () => {
        setUserInfo(null);
        navigate("/");
      },
    }
  );

  return isLoading || !userInfo ? (
    <div>Loading</div>
  ) : (
    <Container>
      <UserInfo userInfo={userInfo} />
    </Container>
  );
}
export default ProfilePage;
