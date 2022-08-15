import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

export const OuterCard = styled(Card)`
  background: ${({ thumbnail }: { thumbnail: string }) =>
    `linear-gradient(rgba(0, 0, 0, 0.8), 40%, transparent), url(${thumbnail})`};
  background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 300px;
  height: 400px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 0.25rem;
  color: black;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }
`;
