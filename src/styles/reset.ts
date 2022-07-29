import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const reset = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default reset;
