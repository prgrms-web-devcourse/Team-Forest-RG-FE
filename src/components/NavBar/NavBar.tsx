import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
import { isAuthState, tokenState } from "@/recoil/state/authState";
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
  const token = useRecoilValue(tokenState);
  const EventSource = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    if (isAuth && token) {
      const eventSource = new EventSourcePolyfill(
        "https://rg-server.p-e.kr/api/v1/connection/sse ",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "https://rg-server.p-e.kr",
          },
        }
      );
      eventSource.onopen = (e) => {
        console.log(e, "open");
      };

      eventSource.onmessage = (e) => {
        console.log(e.data);
      };

      eventSource.onerror = (e) => {
        console.log(e, "error");
      };

      eventSource.addEventListener("health-check", function (event) {
        // 연결 재대로 되어있는지 확인하는 용도
        console.log(event);
      });
      eventSource.addEventListener("notification-occur", (event) => {
        console.log(event);
      });
    }
  }, [isAuth, EventSource, token]);

  return (
    <>
      <NavBarContainer>
        <ContentContainer>
          <Box>
            <StyledLink to="/">
              <Logo src={rgLogo} alt="logo" />
            </StyledLink>
            <StyledLink to="/posts">라이딩 찾아보기</StyledLink>
            {isAuth && <StyledLink to="/post/create"> 라이딩 개설 </StyledLink>}
          </Box>
          <Box>
            {isAuth ? (
              <>
                <NotificationsNoneIcon />
                <StyledLink to="/mypage"> 마이페이지 </StyledLink>
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
