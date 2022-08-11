import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Text from "@/components/Text";
import { useUserActions } from "@/recoil/actions/auth";
import * as S from "./SideNavigation.style";
import user from "@/api/user";
import UserInfo from "@/components/UserInfo";

const SideNavigation = () => {
  const { id: userId } = useParams();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const userActions = useUserActions();
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
    <>
      <UserInfo userInfo={userInfo} />
      <S.UserMenu>
        <S.StyledLink to={`/mypage/${userId}`}>
          <Text variant="h6" textStyle={S.MenuTextStyle}>
            마이페이지
          </Text>
        </S.StyledLink>
        <Text variant="h6" textStyle={S.MenuTextStyle}>
          라이딩 관리
          <S.StyledLink to={`/mypage/${userId}/riding`}>
            <Text variant="subtitle1">라이딩 현황</Text>
          </S.StyledLink>
          <S.StyledLink to={`/mypage/${userId}/rating`}>
            <Text variant="subtitle1">라이딩 평가</Text>
          </S.StyledLink>
        </Text>
        <Text variant="h6" textStyle={S.MenuTextStyle}>
          계정 관리
          <S.StyledLink to={`/mypage/${userId}/profile`}>
            <Text variant="subtitle1">프로필 수정</Text>
          </S.StyledLink>
          <S.StyledLink to={`/mypage/${userId}/privacy`}>
            <Text variant="subtitle1">개인정보 수정</Text>
          </S.StyledLink>
        </Text>
        <S.Logout
          onClick={() => userActions.logout()}
          onKeyDown={() => userActions.logout()}
          role="button"
          tabIndex={0}
        >
          로그아웃
        </S.Logout>
      </S.UserMenu>
    </>
  );
};

export default SideNavigation;
