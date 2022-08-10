import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "@/styles/theme";

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;

  width: 100%;
  height: 5rem;
  border-bottom: 3px solid black;

  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const HeaderSpace = styled.div`
  width: 100%;
  height: 5rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const Logo = styled.img`
  width: 8rem;
  height: 5rem;
  padding: 0.5rem 0;
  margin: 0 1rem;
`;
