import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//* SideNavigation
export const UserInfo = styled.div`
  width: 100%;
`;

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
export const UserIamgeBox = styled.div`
  width: fit-content;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  position: relative;
`;
export const UserIamge = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
export const EditButton = styled.div`
  border-radius: 300px;
  border: 1px solid #ddd;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  right: -8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// nickname
export const UserNickName = styled.div`
  display: flex;
  justify-content: center;
`;

// bike + 경력
export const UserChipBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// 실력 + 매너
export const UserScoreBox = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100px;
`;

export const GrayBox = styled.div`
  flex: 1 1 45%;

  margin: 0.5rem;
  padding: 0.5rem;
  background: #fafafa;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LevelBike = styled.div`
  flex: 1 1 45%;

  margin: 1rem;
  background: #fafafa;
  border-radius: 1rem;
`;
export const MannerPoint = styled.div`
  flex: 1 1 45%;
  margin: 1rem;
  background: #fafafa;
  border-radius: 1rem;
`;

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
