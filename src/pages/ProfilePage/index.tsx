/* eslint-disable no-use-before-define */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserInfo from "@/components/UserInfo";
import user from "@/api/user";
import { Container } from "./index.style";

function ProfilePage() {
  const { id: userId } = useParams();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = userId && (await user.getUserInfo(Number(userId)));
        setUserInfo(data);
      } catch (error) {
        navigate("/");
      }
    };
    fetchUserInfo();
    setLoading(false);
  }, [userId]);

  if (loading || !userInfo) return <div>Loading</div>;
  return (
    <Container>
      <UserInfo userInfo={userInfo} />
    </Container>
  );
}
export default ProfilePage;
