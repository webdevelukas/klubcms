// Import dependencies
import styled from "styled-components";

const Input = styled.input`
  background: ${({ theme }) => theme.highlightContrast};
  box-shadow: ${({ theme }) => theme.highlight} 3px 3px 0;
  color: ${({ theme }) => theme.main};
  caret-color: ${({ theme }) => theme.highlight};
  padding: 0.5em 0.8em;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;

  ::-webkit-input-placeholder {
    color: hsla(147, 63%, 7%, 0.4);
    font-size: 0.8em;
    font-weight: 400;
    padding-left: 0.5em;
  }
`;

export default Input;
