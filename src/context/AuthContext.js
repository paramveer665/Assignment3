import React, { createContext, useState, useEffect } from "react";
import { personalData } from "../components/PersonalData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setIsAuthenticated(true);
    setUser(personalData); // Set user data from PersonalData.js upon login
    console.log("AuthContext: User logged in", {
      isAuthenticated: true,
      user: personalData,
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    console.log("AuthContext: User logged out");
  };

  const updateUser = (newUserData) => {
    setUser(newUserData);
    console.log("AuthContext: User data updated", newUserData);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
