import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const EditButton = styled.div`
  border-radius: 300px;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
