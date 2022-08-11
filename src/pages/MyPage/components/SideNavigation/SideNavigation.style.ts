import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//* SideNavigation
export const UserMenu = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  diplay: flex;
`;

export const StyledLink = styled(Link)`
  color: black;
  font-size: 1.125rem;
  font-weight: 800;

  border: none;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
`;

//* SideNavigation > UserInfo
// Image

export const Logout = styled.div`
  margin: 0;
  font-family: Pretendard-Regular, Roboto, sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.6;

  cursor: pointer;
`;

export const MenuTextStyle = {
  fontWeight: 800,
  marginBottom: "2rem",
};
