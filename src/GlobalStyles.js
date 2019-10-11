import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  background: #E1E1E1;
  font-family: 'Cairo', sans-serif;
  font-weight: 400;
}

button {
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
  font-size: 16px;
  border: none;
}
`;
