// Imported dependencies
import styled from "styled-components";

// Basic styling for all textareas
const Textarea = styled.textarea`
  background: ${({ theme }) => theme.highlightContrast};
  box-shadow: ${({ theme }) => theme.highlight} 3px 3px 0;
  color: ${({ theme }) => theme.main};
  caret-color: ${({ theme }) => theme.highlight};
  padding: 0.5em 0.8em;
  min-width: 100%;
  max-width: 100%;
  min-height: 180px;

  ::-webkit-input-placeholder {
    color: hsla(147, 63%, 7%, 0.4);
    font-size: 0.8em;
    font-weight: 400;
    padding-left: 0.5em;
  }
`;

// Textarea with bold input text and a lower min-height
export const TextareaWithBoldText = styled(Textarea)`
  font-weight: 700;
  min-height: 60px;
`;

export default Textarea;
