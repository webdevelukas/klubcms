// Imported dependencies
import styled from "styled-components";

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.highlightContrast};
  padding: 0 0.8em;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 700;
  margin: 0 0.3em 3px 0;
  max-width: fit-content;
  cursor: pointer;

  :nth-last-child(1) {
    margin: 0;
  }
`;

export default Badge;
