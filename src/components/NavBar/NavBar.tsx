/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { NativeEventSource, EventSourcePolyfill } from "event-source-polyfill";
import { useInfiniteQuery, useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { isAuthState, tokenState, userState } from "@/recoil/state/authState";
import {
  NavBarContainer,
  ContentContainer,
  NavBarSpace,
  Box,
  StyledLink,
  Logo,
} from "./NavBar.style";
import { getNotifications, readAllNotifications } from "@/api/notification";
import rgLogo from "@/assets/RG_Logo.png";
import Badge from "@/components/Badge";
import IconButton from "@/components/IconButton";
import Menu from "@/components/Menu";
import Text from "@/components/Text";

const NavBar = () => {
  const isAuth = useRecoilValue(isAuthState);
  const token = useRecoilValue(tokenState);
  const userId = useRecoilValue(userState);
  const EventSource = EventSourcePolyfill || NativeEventSource;
  const navigate = useNavigate();
  const [bagdeCount, setBadgeCount] = useState(0);

  useQuery(["getNotifications", userId], () => getNotifications(), {
    enabled: !!isAuth && !!token && !!userId,
    onSuccess: (data) => {
      setBadgeCount(data.totalElements);
    },
  });

  useEffect(() => {
    if (isAuth && token && userId) {
      const eventSource = new EventSourcePolyfill(
        `https://rg-server.p-e.kr/api/v1/connection/sse`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      eventSource.addEventListener("notification_occur", () => {
        setBadgeCount((prev) => prev + 1);
      });
    }
  }, [isAuth, EventSource, token, userId]);

  const [clicked, setClicked] = useState(false);
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
  const [notificationData, setNotificationData] = useState<any[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const notificationDeleteMutation = useMutation(readAllNotifications, {
    onSuccess: () => {
      setBadgeCount(0);
    },
  });

  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["notifications", userId],
    ({ pageParam = 0 }) => getNotifications(pageParam),
    {
      enabled: isAuth && clicked,
      getNextPageParam: (lastPage) =>
        lastPage.last ? undefined : lastPage.pageable.pageNumber + 1,
      onSuccess: (response: any) => {
        setNotificationData((prev) => [...prev, ...response.pages[0].content]);
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setTargetEl(e.currentTarget);
  };

  const handleClose = () => {
    // eslint-disable-next-line no-unused-expressions
    notificationData.length && notificationDeleteMutation.mutate();
    setNotificationData([]);
    setClicked(false);
    setTargetEl(null);
  };

  const handleNavigate = (type: string, id: number) => {
    if (type.startsWith("RIDING_JOIN")) {
      navigate(`/post/${id}`);
    }
  };

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
                <Badge
                  color="primary"
                  badgeContent={bagdeCount}
                  invisible={bagdeCount === 0}
                >
                  <IconButton
                    iconName="notifications"
                    color={clicked ? "error" : undefined}
                    onClick={handleClick}
                  />
                </Badge>
                <Menu targetEl={targetEl} handleClose={handleClose}>
                  {notificationData.map((nofi: any, index) => (
                    <MenuItem
                      key={nofi.id}
                      ref={index === notificationData.length - 1 ? ref : null}
                      onClick={() => handleNavigate(nofi.type, nofi.ridingId)}
                    >
                      {nofi.contents}
                    </MenuItem>
                  ))}
                  {!hasNextPage && (
                    <Text variant="caption">더 이상의 알림은 없습니다!</Text>
                  )}
                </Menu>
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
