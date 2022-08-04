import axios from "axios";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import axiosInstance from "@/api/axiosInstance";
import { isAuthState } from "@/recoil/state/authState";

function MainPage() {
  const [isAuth, setIsAuth] = useRecoilState(isAuthState);
  const getUser = async () => {
    const data = await axiosInstance({
      method: "GET",
      url: "/user/me",
    });
  };

  const postWringToken = async () => {
    try {
      await axios.get("http://192.168.0.22:8080/user/me", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjU5NTg3MDUzLCJpYXQiOjE2NTk1ODcwNTMsInVzZXJJZCI6MTAwfQ.lIadExSbzsvYCB7CzS_KbcA6eWnIjVHn0U6PpDNFsl0lX1wmJJ4ziRj8TN_5TgpSF1re-s37UrrGiEYF-le2lQ",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const tempLogin = () => {
    setIsAuth(true);
  };

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
  return (
    <Container>
      MainPage
      <button type="button" onClick={getUser}>
        api테스트
      </button>
      <button type="button" onClick={postWringToken}>
        잘못된 토큰 테스트
      </button>
      <button type="button" onClick={tempLogin}>
        임시 로그인 테스트
      </button>
    </Container>
  );
}

export default MainPage;
