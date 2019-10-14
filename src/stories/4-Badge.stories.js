import React from "react";
import styled from "styled-components";
import Badge from "../components/Badge";

export default {
  title: "Badge"
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Default = () => <Badge>1. Mannschaft</Badge>;

export const ListedHorizontal = () => (
  <>
    <Badge>Fussball</Badge>
    <Badge>Herren</Badge>
    <Badge>1. Mannschaft</Badge>
  </>
);

export const ListedVertical = () => (
  <FlexContainer>
    <Badge>Fussball</Badge>
    <Badge>Herren</Badge>
    <Badge>1. Mannschaft</Badge>
  </FlexContainer>
);
