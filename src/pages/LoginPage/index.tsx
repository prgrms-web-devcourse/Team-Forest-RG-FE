import querystring from "query-string";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUserActions } from "@/recoil/actions/auth";
import kakaoImage from "@/assets/kakao_login_medium_narrow.png";
import { Container, ImageWrapper } from "./index.style";
import rgLogo from "@/assets/RG_Logo.png";

function LoginPage() {
  const userActions = useUserActions();
  const location = useLocation();
  const query = querystring.parse(window.location.search);

  useEffect(() => {
    if (query.code) {
      console.log(query.state);
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
      <ImageWrapper
        onClick={handleKakaoLogin}
        onKeyDown={handleKakaoLogin}
        role="button"
        tabIndex={0}
      >
        <img src={rgLogo} alt="rgLogo" width="250px" />
        <img src={kakaoImage} alt="kakaoLogin" width="250px" />
      </ImageWrapper>
    </Container>
  );
}

export default LoginPage;
