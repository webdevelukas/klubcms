// Imported dependencies
import React, { createContext } from "react";
import PropTypes from "prop-types";
import useGetUser from "../hooks/useGetUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userId = "5dc192e71c9d4400009060be";
  const user = useGetUser(userId);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node
};
