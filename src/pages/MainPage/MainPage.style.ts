import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 30rem;
  max-height: 50rem;
  .swiper {
    height: 100%;
    width: 60rem;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 3rem;
  margin: 0 auto;
`;
