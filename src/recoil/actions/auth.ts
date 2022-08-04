import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { tokenState, isAuthState } from "../state/authState";
import auth from "@/api/auth";

function useUserActions() {
  const setToken = useSetRecoilState(tokenState);
  const setIsAuth = useSetRecoilState(isAuthState);
  const navigate = useNavigate();

  //* 인가코드 보내고, 토큰 및 유저정보 받아서 저장
  const login = async (code: string) => {
    try {
      const data = await auth.login(code);
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      setToken(data.accessToken);
      setIsAuth(true);
      if (data.isNew) {
        navigate("/register", { replace: true });
      } else {
        // TODO: 로그인 요청 한 곳으로 이동
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  //* 토큰 및 유저 정보 비우기
  const logout = async (token: string) => {
    try {
      // TODO: server와 logout API 만들기
      await auth.logout();
      setToken("");
      setIsAuth(false);
    } catch (error) {
      console.error(error);
    }
  };

  //* Token이 유효한지 확인 후, 유효 여부에 따라 유저 정보 저장 및 비우기 처리
  //* AuthRoute 진입 시 바로 실행하여, 로그인 유지 및 현재 토큰 유효성 확인 용도
  const authUser = async (token: string) => {
    try {
      await auth.checkAuth(token);
      setIsAuth(true);
    } catch (error) {
      setToken("");
      setIsAuth(false);
    }
  };

  return { login, logout, authUser };
}
export { useUserActions };
