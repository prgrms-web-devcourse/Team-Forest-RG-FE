import querystring from "query-string";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import { useUserActions } from "@/recoil/actions/auth";
import { Container, ImageWrapper, KakaoButton } from "./index.style";
import rgLogo from "@/assets/RG_Logo.png";
import KakaoIcon from "@/components/KakaoIcon";
import Text from "@/components/Text";

function LoginPage() {
  const userActions = useUserActions();
  const location = useLocation();
  const query = querystring.parse(window.location.search);

  useEffect(() => {
    if (query.code) {
      const from = JSON.parse(query.state as any).pathname || "/";
      userActions.login(query.code.toString(), from);
    }
  }, []);

  const handleKakaoLogin = async () => {
    const fromUrl = location.state ? (location.state as any).from : "/";
    const kakaoAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
      process.env.REACT_APP_REST_API_KEY
    }&redirect_uri=${
      process.env.REACT_APP_REDIRECT_URI
    }&response_type=code&state=${JSON.stringify(fromUrl)}`;
    window.location.href = kakaoAuthLink;
  };

  return (
    <Container>
      <ImageWrapper role="button" tabIndex={0}>
        <img src={rgLogo} alt="rgLogo" width="250px" />
        <KakaoButton
          onClick={handleKakaoLogin}
          onKeyDown={handleKakaoLogin}
          startIcon={
            <SvgIcon>
              <KakaoIcon />
            </SvgIcon>
          }
          customHoverColor="#EFD806"
        >
          <Text variant="body1" fontWeight={600}>
            카카오톡으로 로그인
          </Text>
        </KakaoButton>
      </ImageWrapper>
    </Container>
  );
}

export default LoginPage;
