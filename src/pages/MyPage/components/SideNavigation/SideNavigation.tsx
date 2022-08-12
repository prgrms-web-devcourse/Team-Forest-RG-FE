import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useUserActions } from "@/recoil/actions/auth";
import Text from "@/components/Text";
import UserInfo from "@/components/UserInfo";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../../hooks/useUserInfo";
import * as S from "./SideNavigation.style";

const SideNavigation = () => {
  const userActions = useUserActions();
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading, userError] = useUserInfo(myUserId);
  const navigate = useNavigate();

  useEffect(() => {
    if (userError) navigate("/");
  }, [userError]);

  if (loading || !userInfo) return <div>Loading</div>;
  return (
    <>
      <UserInfo userInfo={userInfo} />
      <S.UserMenu>
        <S.StyledLink to="/mypage">
          <Text variant="h6" textStyle={S.MenuTextStyle}>
            마이페이지
          </Text>
        </S.StyledLink>
        <Text variant="h6" textStyle={S.MenuTextStyle}>
          라이딩 관리
          <S.StyledLink to="/mypage/riding">
            <Text variant="subtitle1">라이딩 내역</Text>
          </S.StyledLink>
          <S.StyledLink to="/mypage/rating">
            <Text variant="subtitle1">노쇼 체크 / 평가</Text>
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
