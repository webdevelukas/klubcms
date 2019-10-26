import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { UserImage } from "./Image";
import MenuBurger from "./MenuBurger";
import { GoBack } from "../stories/8-UIElements.stories";

const StyledMenuBar = styled.div`
  z-index: 102;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 0 1em;
  background: ${props => props.theme.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUserImage = styled(UserImage)`
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: -25px;
`;

export default function MenuBar({ onClick, open, setOpen }) {
  return (
    <StyledMenuBar>
      <GoBack onClick={onClick} />
      <StyledUserImage src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
      <MenuBurger open={open} setOpen={setOpen} />
    </StyledMenuBar>
  );
}

MenuBar.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
