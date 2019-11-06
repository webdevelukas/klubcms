// Imported dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Imported components
import MenuBar from "./MenuBar";
import MenuList from "./MenuList";

const StyledMenu = styled.section`
  position: relative;
  display: flex;
`;

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <StyledMenu>
      <MenuBar open={open} setOpen={setOpen} />
      <MenuList open={open} setOpen={setOpen} />
    </StyledMenu>
  );
}
