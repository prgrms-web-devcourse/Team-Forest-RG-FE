import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 2rem 0;
  width: 100%;
  height: 25rem;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
  .leader-info {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    h2 {
      width: 100%;
    }
  }
`;
