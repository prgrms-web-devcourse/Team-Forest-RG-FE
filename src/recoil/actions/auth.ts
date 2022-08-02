import { useSetRecoilState } from "recoil";
import { tokenState, userState, isAuthState } from "../state/authState";
import auth from "@/api/auth";

function useUserActions() {
  const setToken = useSetRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const setIsAuth = useSetRecoilState(isAuthState);

  //* 인가코드 보내고, 토큰 및 유저정보 받아서 저장
  const login = async (code: string) => {
    try {
      const data = await auth.login(code);
      setToken(data.token);
      setUser(data.user);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  //* 토큰 및 유저 정보 비우기
  const logout = async (token: string) => {
    try {
      // TODO: server와 logout API 만들기
      // await auth.logout();
      await auth.logoutKaKao(token);
      setToken("");
      setUser(null);
      setIsAuth(false);
    } catch (error) {
      console.error(error);
    }
  };

  //* Token이 유효한지 확인 후, 유효 여부에 따라 유저 정보 저장 및 비우기 처리
  //* AuthRoute 진입 시 바로 실행하여, 로그인 유지 및 현재 토큰 유효성 확인 용도
  const authUser = async (token: string) => {
    try {
      const data = await auth.checkAuth(token);
      setUser(data.user);
      setIsAuth(true);
      console.log("kakaoUser: ", data.user);
    } catch (error) {
      setToken("");
      setUser(null);
      setIsAuth(false);
    }
  };

  return { login, logout, authUser };
}
export { useUserActions };
