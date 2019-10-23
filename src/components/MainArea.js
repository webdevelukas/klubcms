import styled from "styled-components";

const MainArea = styled.main`
  display: grid;
  grid-auto-rows: auto;
  justify-items: center;
  padding: 0 1rem;
  margin: 1rem 0 3rem;
`;

export const ColoredMainArea = styled(MainArea)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.highlightContrast};
  height: 100vh;
  padding: 3rem 3rem 2rem;
  margin: 0;

  h2 {
    align-self: flex-start;
    font-size: 1em;
    text-align: left;
    text-transform: none;
    margin: 1em 0 0.25em 0.5em;
  }
`;

export default MainArea;
