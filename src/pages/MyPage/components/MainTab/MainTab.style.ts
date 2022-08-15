import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  gap: 0.25rem;
  color: black;
  align-items: center;
  text-decoration: none;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
`;

export const MenuContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  gap: 2.5rem;
  justify-content: center;
`;

export const RidingContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
`;

export const LinkButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;
