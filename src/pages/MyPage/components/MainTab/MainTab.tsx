import { useRecoilValue } from "recoil";
import { Avatar, Icon } from "@mui/material";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../../hooks/useUserInfo";
import Spinner from "@/components/Spinner";
import Text from "@/components/Text";
import {
  Container,
  LinkButtonWrapper,
  MenuContainer,
  ProfileContainer,
  RidingContainer,
  StyledLink,
} from "./MainTab.style";
import Divider from "@/components/Divider";
import Button from "@/components/Button";

const MainTab = () => {
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);
  console.log(userInfo);
  return !userInfo || loading ? (
    <Spinner />
  ) : (
    <Container>
      <Text variant="h5" textStyle={{ fontWeight: 600 }}>
        마이 페이지
      </Text>
      <ProfileContainer>
        <Avatar
          src={userInfo.ridingProfile.profileImage}
          style={{ justifySelf: "center", width: "4rem", height: "4rem" }}
        />
        <Text variant="subtitle1">{userInfo.ridingProfile.introduction}</Text>
        <Text variant="subtitle1" textStyle={{ fontWeight: 600 }}>
          전화번호
        </Text>
        <Text variant="subtitle1">{userInfo.privacyProfile.phoneNumber}</Text>
      </ProfileContainer>
      <Divider />
      <MenuContainer>
        <StyledLink to="/mypage/riding">
          <Icon fontSize="large">pedal_bike_icon</Icon>
          <Text variant="subtitle1">라이딩 내역</Text>
        </StyledLink>
        <Divider direction="vertical" />
        <StyledLink to="/mypage/evaluate">
          <Icon fontSize="large">fact_check_icon</Icon>
          <Text variant="subtitle1">평가</Text>
        </StyledLink>
        <Divider direction="vertical" />
        <StyledLink to="/mypage/profile">
          <Icon fontSize="large">settings_icon</Icon>
          <Text variant="subtitle1">프로필 수정</Text>
        </StyledLink>
      </MenuContainer>
      <Divider />
      <RidingContainer>
        <Text variant="h6" textStyle={{ fontWeight: 600 }}>
          평가 가능한 라이딩
        </Text>
        <Text variant="body1">
          {userInfo.ridings.canEvaluated.length !== 0
            ? `평가 가능한 라이딩이 ${userInfo.ridings.canEvaluated.length}개 있어요`
            : `평가 가능한 라이딩이 없어요. 라이딩을 신청하고 같이 간 사용자를 추천해 보세요!`}
        </Text>
        {userInfo.ridings.canEvaluated.length !== 0 ? (
          <LinkButtonWrapper>
            <StyledLink to="/mypage/evaluate">
              <Button variant="outlined">라이딩 평가하러 가기</Button>
            </StyledLink>
          </LinkButtonWrapper>
        ) : (
          <LinkButtonWrapper>
            <StyledLink to="/posts">
              <Button variant="outlined">라이딩 찾아보기</Button>
            </StyledLink>
          </LinkButtonWrapper>
        )}
      </RidingContainer>
    </Container>
  );
};

export default MainTab;
