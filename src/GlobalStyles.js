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
  color: ${props => props.theme.main}
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.2em;
}

h3 {
  font-size: 1em;
  line-height: 1.2em;
}

button, input, select, textarea {
  font-family : inherit;
  font-size: 1rem;
  border: none;
}
`;
