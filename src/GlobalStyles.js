import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  background: #E1E1E1;
}
`;
