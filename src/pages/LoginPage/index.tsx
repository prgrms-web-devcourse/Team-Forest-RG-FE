import styled from "@emotion/styled";
import kakaoImage from "@/assets/kakao_login_medium_narrow.png";

const Container = styled.div`
  width: 100%;
  height: 32px;
  text-align: center;
  font-size: 24px;
`;
function LoginPage() {
  const handleKakaoLogin = async () => {
    const kakaoAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&state={redirectPage:RidingCreatePage}`;
    window.location.href = kakaoAuthLink;
  };

  return (
    <div>
      <Container onClick={handleKakaoLogin}>
        <img src={kakaoImage} alt="kakaoLogin" width="250px" />
      </Container>
    </div>
  );
}

export default LoginPage;
