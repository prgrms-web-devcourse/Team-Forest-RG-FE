import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Text from "@/components/Text";
import Chip from "@/components/Chip";
import IconButton from "@/components/IconButton";
import { useUserActions } from "@/recoil/actions/auth";
import * as S from "./SideNavigation.style";
import user from "@/api/user";

const SideNavigation = () => {
  const { id: userId } = useParams();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const userActions = useUserActions();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = userId && (await user.getUserInfo(Number(userId)));
      setUserInfo(data);
    };
    fetchUserInfo();
    setLoading(false);
  }, [userId]);

  if (loading || !userInfo) return <div>Loading</div>;
  return (
    <>
      <S.UserInfo>
        <S.UserIamgeBox>
          <S.UserIamge src={userInfo.ridingProfile.profileImage} />
          <S.EditButton>
            <IconButton iconName="add_circle" component="label" color="primary">
              <input hidden accept="image/*" multiple type="file" />
            </IconButton>
          </S.EditButton>
        </S.UserIamgeBox>
        <S.UserNickName>
          <Text variant="h6">{userInfo.ridingProfile.nickname}</Text>
        </S.UserNickName>
        <S.UserChipBox>
          {userInfo.ridingProfile.bicycles.map((bike: string) => (
            <Chip
              key={bike}
              label={bike}
              color="primary"
              sx={{ marginX: "3px", marginY: "1px" }}
            />
          ))}
          <Chip
            label={`${
              new Date().getFullYear() - userInfo.ridingProfile.ridingStartYear
            }년차`}
            bgColor="royalblue"
            textColor="white"
            sx={{ marginX: "3px", marginY: "1px" }}
          />
        </S.UserChipBox>
        <S.UserScoreBox>
          <S.GrayBox>
            <Text variant="body2">level</Text>
            <Text variant="body1" textStyle={{ fontWeight: 800 }}>
              {userInfo.ridingProfile.level}🦽
            </Text>
          </S.GrayBox>
          <S.GrayBox>
            <Text variant="body2">매너</Text>
            <Text variant="body1" textStyle={{ fontWeight: 800 }}>
              {userInfo.manner.mannerPoint} 😀
            </Text>
          </S.GrayBox>
        </S.UserScoreBox>
      </S.UserInfo>
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
