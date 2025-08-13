import React, { useContext } from "react";
import TabContext from "../context/TabContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ setCurrentPage }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { activeTab, setActiveTab } = useContext(TabContext);

  console.log(activeTab);

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
            <li className="relative group">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src="https://via.placeholder.com/40" alt="user" className="rounded-full" />
              </div>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-64 right-0">
                <li>
                  <a href="#" onClick={() => setCurrentPage("profile")} className="block px-6 py-3 text-gray-800 hover:bg-gray-200">
                    Edit Personal Data
                  </a>
                </li>
                <li>
                  <span className="block px-6 py-3 text-gray-500 cursor-not-allowed">
                    Change Password
                  </span>
                </li>
                <li>
                  <a href="#" onClick={handleLogout} className="block px-6 py-3 text-gray-800 hover:bg-gray-200">
                    Logout
                  </a>
                </li>
              </ul>
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
