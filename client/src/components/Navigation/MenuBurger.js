// Imported dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Imported components
import { IconTextContainerIconTop } from "../Container/IconTextContainer";

const StyledMenuBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
  padding: 0;

  div {
    width: 2.4rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.highlight};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(40deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-40deg)" : "rotate(0)")};
    }
  }
`;

export default function MenuBurger({ open, setOpen }) {
  return (
    <IconTextContainerIconTop open={open} onClick={() => setOpen(!open)}>
      <StyledMenuBurger open={open}>
        <div />
        <div />
        <div />
      </StyledMenuBurger>
      {open ? "close" : "menu"}
    </IconTextContainerIconTop>
  );
}

MenuBurger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
