import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { tokenState, isAuthState } from "@/recoil/state/authState";
import { useUserActions } from "@/recoil/actions/auth";

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 3px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
function Layout() {
  const userActions = useUserActions();

  const token = useRecoilValue(tokenState);
  const isAuth = useRecoilValue(isAuthState);

  const handleKakaoLogout = async () => {
    await userActions.logout();
    console.log("logout 완료");
  };
  return (
    <div>
      <NavBar>
        NavBar
        <div>token: {token || "없음"}</div>
        <div>isAuth: {isAuth ? "true" : "false"}</div>
        <button type="button" onClick={handleKakaoLogout}>
          Kakao로그아웃
        </button>
      </NavBar>
      <Outlet />
    </div>
  );
}

export default Layout;

export { default as MainPage } from "./MainPage";
export { default as NotFoundPage } from "./NotFoundPage";
