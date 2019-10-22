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

body {
  height: 100vh;
  width:100vw;
  margin: 0;
  background: #e1e1e1;
  overflow:hidden;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.4em;
  text-transform: uppercase;
}

h3 {
  font-size: 1em;
  line-height: 1.2em;
}

button, input, select, textarea {
  font-family : inherit;
  font-size: 1rem;
  border: none;

  &:focus {
    outline: none;
  }
}

hr {
  width:100%;
  border-color: ${props => props.theme.main};
  margin:2em 0;
}

`;
