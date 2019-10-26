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
  color: ${({ theme }) => theme.main}
}

body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background: #e1e1e1;
  overflow-x: hidden;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.2em;
  text-align: center;

  br {
    line-height: 6rem;
  }
}

h2 {
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0 0.25rem;
}

h3 {
  font-size: 1rem;
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
  border-color: ${({ theme }) => theme.main};
  margin:2rem 0 1rem;
}

a {
  text-decoration: inherit;
  color: inherit;
  fill: inherit;
  all: none;
}

`;
