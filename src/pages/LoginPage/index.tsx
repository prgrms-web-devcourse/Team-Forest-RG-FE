import styled from "@emotion/styled";
import querystring from "query-string";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUserActions } from "@/recoil/actions/auth";
import kakaoImage from "@/assets/kakao_login_medium_narrow.png";

const Container = styled.div`
  width: 100%;
  height: 32px;
  text-align: center;
  font-size: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function LoginPage() {
  const userActions = useUserActions();
  const location = useLocation();
  const query = querystring.parse(window.location.search);

  useEffect(() => {
    if (query.code) {
      // Todo: query.state Type문제 해결
      const from = JSON.parse(query.state as any).pathname || "/";
      userActions.login(query.code.toString(), from);
    }
  }, []);

  const handleKakaoLogin = async () => {
    // Todo: location.state Type문제 해결
    const fromUrl = location.state ? (location.state as any).from : "/";
    const kakaoAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
      process.env.REACT_APP_REST_API_KEY
    }&redirect_uri=${
      process.env.REACT_APP_REDIRECT_URI
    }&response_type=code&state=${JSON.stringify(fromUrl)}`;
    window.location.href = kakaoAuthLink;
  };

  return (
    <div>
      <Container>
        <div
          onClick={handleKakaoLogin}
          onKeyDown={handleKakaoLogin}
          role="button"
          tabIndex={0}>
          <img src={kakaoImage} alt="kakaoLogin" width="250px" />
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
