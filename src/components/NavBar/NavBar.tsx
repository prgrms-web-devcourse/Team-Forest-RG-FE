import { useRecoilValue } from "recoil";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useLocation } from "react-router-dom";
import { isAuthState } from "@/recoil/state/authState";
import {
  NavBarContainer,
  ContentContainer,
  NavBarSpace,
  Box,
  StyledLink,
  Logo,
} from "./NavBar.style";
import rgLogo from "@/assets/RG_Logo.png";

const NavBar = () => {
  const isAuth = useRecoilValue(isAuthState);
  const { pathname } = useLocation();
  return (
    <>
      <NavBarContainer>
        <ContentContainer>
          <Box>
            <StyledLink to="/">
              <Logo src={rgLogo} alt="logo" />
            </StyledLink>
            <StyledLink
              to="/posts"
              className={pathname.includes("posts") ? "active" : undefined}
            >
              라이딩 찾아보기
            </StyledLink>
            {isAuth && (
              <StyledLink
                to="/post/create"
                className={pathname.includes("create") ? "active" : undefined}
              >
                라이딩 개설
              </StyledLink>
            )}
          </Box>
          <Box>
            {isAuth ? (
              <>
                <NotificationsNoneIcon />
                <StyledLink
                  to="/mypage"
                  className={pathname.includes("mypage") ? "active" : undefined}
                >
                  마이페이지
                </StyledLink>
              </>
            ) : (
              <StyledLink to="/login"> 로그인 / 회원가입 </StyledLink>
            )}
          </Box>
        </ContentContainer>
      </NavBarContainer>
      <NavBarSpace />
    </>
  );
};

export default NavBar;
