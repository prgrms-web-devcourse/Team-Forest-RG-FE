import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
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
