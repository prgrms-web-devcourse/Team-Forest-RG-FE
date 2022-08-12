import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 30vh;
  max-height: 300px;
  .swiper {
    height: 100%;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
