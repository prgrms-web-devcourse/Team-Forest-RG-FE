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
interface LocationState {
  from: string;
}

function LoginPage() {
  const userActions = useUserActions();
  const query = querystring.parse(window.location.search);
  const location = useLocation();
  console.log("loginPage의 location: ", location);

  const locationState = location.state as LocationState | null;
  const fromUrl = locationState ? locationState.from : "/";
  useEffect(() => {
    if (query.code) {
      console.log("loginPage 요청 직전 location", location);
      userActions.login(query.code.toString());
    }
  }, []);

  const handleKakaoLogin = async () => {
    const kakaoAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=8f248aa7874df072e8d15b2d0b284108&redirect_uri=https://test-005.d1jv4thaz5g50v.amplifyapp.com/login&response_type=code&state={fromUrl:${fromUrl}}`;
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
        <button type="button" onClick={() => userActions.login("123")}>
          로그인 테스트
        </button>
      </Container>
    </div>
  );
}

export default LoginPage;
