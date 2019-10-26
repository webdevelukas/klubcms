import styled from "styled-components";

const MainArea = styled.main`
  display: grid;
  grid-auto-rows: auto;
  justify-items: center;
  padding: 1rem 1rem;
  overflow-y: scroll;
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
`;

export default MainArea;
