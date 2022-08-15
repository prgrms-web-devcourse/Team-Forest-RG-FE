import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const reset = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  @font-face {
    font-family: "SUIT-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

export default reset;
