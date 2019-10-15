import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

button, input, select, textarea {
  font-family : inherit;
  font-size: 1rem;
  border: none;
}
`;
