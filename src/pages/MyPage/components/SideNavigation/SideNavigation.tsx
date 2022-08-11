import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useUserActions } from "@/recoil/actions/auth";
import user from "@/api/user";
import Text from "@/components/Text";
import UserInfo from "@/components/UserInfo";
import { userState } from "@/recoil/state/authState";
import { UserInfoType } from "@/components/UserInfo/UserInfo";
import * as S from "./SideNavigation.style";

const SideNavigation = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [loading, setLoading] = useState(true);
  const userActions = useUserActions();
  const myUserId = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!myUserId) navigate("/");
        const data = myUserId && (await user.getUserInfo(Number(myUserId)));
        setUserInfo(data);
      } catch (error) {
        navigate("/");
      }
    };
    fetchUserInfo();
    setLoading(false);
  }, [myUserId]);

  if (loading || !userInfo) return <div>Loading</div>;
  return (
    <>
      <UserInfo userInfo={userInfo} />
      <S.UserMenu>
        <div>userId: {myUserId || "없음"}</div>
        <S.StyledLink to="/mypage">
          <Text variant="h6" textStyle={S.MenuTextStyle}>
            마이페이지
          </Text>
        </S.StyledLink>
        <Text variant="h6" textStyle={S.MenuTextStyle}>
          라이딩 관리
          <S.StyledLink to="/mypage/riding">
            <Text variant="subtitle1">라이딩 현황</Text>
          </S.StyledLink>
          <S.StyledLink to="/mypage/rating">
            <Text variant="subtitle1">라이딩 평가</Text>
          </S.StyledLink>
        </Text>
        <Text variant="h6" textStyle={S.MenuTextStyle}>
          계정 관리
          <S.StyledLink to="/mypage/profile">
            <Text variant="subtitle1">프로필 수정</Text>
          </S.StyledLink>
          <S.StyledLink to="/mypage/privacy">
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
