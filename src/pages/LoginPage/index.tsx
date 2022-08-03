import styled from "@emotion/styled";
import querystring from "query-string";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useUserActions } from "@/recoil/actions/auth";
import kakaoImage from "@/assets/kakao_login_medium_narrow.png";
import { tokenState } from "@/recoil/state/authState";

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
  const token = useRecoilValue(tokenState);
  const query = querystring.parse(window.location.search);
  useEffect(() => {
    if (query.code) {
      console.log("인가코드: , ", query.code);
      userActions.login(query.code.toString());
    }
  }, []);

  const handleKakaoLogin = async () => {
    const kakaoAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&state={redirectPage:RidingCreatePage}`;
    window.location.href = kakaoAuthLink;
  };

  const getKakaoUser = async () => {
    await userActions.authUser(token);
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

        <button type="button" onClick={getKakaoUser}>
          토큰 유효성 검사 확인
        </button>
      </Container>
    </div>
  );
}

export default LoginPage;
