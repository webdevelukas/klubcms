// Import dependencies
import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// Import components / icons
import { UserImage } from "../Images/Image";
import MenuBurger from "./MenuBurger";
import { IconTextContainerIconLeft } from "../Container/IconTextContainer";
import GoBackIcon from "../../icons/GoBackIcon";
import { UserContext } from "../../context/UserContext";

const StyledMenuBar = styled.div`
  z-index: 102;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 0 1em;
  background: ${({ theme }) => theme.main};
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

export default function MenuBar({ open, setOpen }) {
  const user = useContext(UserContext);
  const history = useHistory();

  return (
    <StyledMenuBar>
      <IconTextContainerIconLeft onClick={() => history.goBack()}>
        <GoBackIcon />
        Go back
      </IconTextContainerIconLeft>
      <StyledUserImage src={user.image} />
      <MenuBurger open={open} setOpen={setOpen} />
    </StyledMenuBar>
  );
}

MenuBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
