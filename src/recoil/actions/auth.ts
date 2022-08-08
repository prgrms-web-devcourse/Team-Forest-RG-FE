import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { tokenState, isAuthState } from "../state/authState";
import auth from "@/api/auth";

function useUserActions() {
  const setToken = useSetRecoilState(tokenState);
  const setIsAuth = useSetRecoilState(isAuthState);
  const navigate = useNavigate();

  //* 인가코드 보내고, 토큰 및 유저정보 받아서 저장
  const login = async (code: string, from: string) => {
    try {
      const data = await auth.login(code);
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      setToken(data.accessToken);
      setIsAuth(true);

      if (data.isNew) {
        navigate("/register", { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  //* 토큰 비우고, 로그인 상태 false로 바꾸기
  const logout = () => {
    setToken("");
    setIsAuth(false);
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
