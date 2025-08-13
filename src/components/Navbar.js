import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ setCurrentPage }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setCurrentPage("login");
  };

  return (
    <>
      <div className="bg-amber-300 w-[100%] h-20 px-20">
        <ul className="flex justify-between h-[100%] items-center text-xl font-bold">
          <li className="flex gap-3 cursor-pointer">
            <a
              href="#"
              onClick={() => setCurrentPage("dashboard")}
              className="flex gap-3"
            >
              <img src="https://via.placeholder.com/40" alt="logo" />
              <div>Title</div>
            </a>
          </li>

          <li className="cursor-pointer">
            <a href="#" onClick={() => setCurrentPage("dashboard")}>
              Home
            </a>
          </li>

          {isAuthenticated ? (
            <li className="flex gap-3 cursor-pointer ">
              <a href="#" onClick={() => setCurrentPage("profile")}>
                View Profile
              </a>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          ) : (
            <li className="cursor-pointer">
              <a href="#" onClick={() => setCurrentPage("login")}>
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
