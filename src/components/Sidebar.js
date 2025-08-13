import TabContext from "../context/TabContext";

import React, { useContext } from "react";

const Sidebar = () => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const tabs = [
    {
      name: "Dashboard",
      component: "Dashboard",
    },
    {
      name: "Cgpa",
      component: "Cgpa",
    },
    {
      name: "COURSES",
      component: "COURSES",
    },
    {
      name: "Assignments",
      component: "Assignments",
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 min-h-screen">
      <nav>
        <ul className="mt-4">
          {tabs.map((t, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveTab(t.name);
              }}
              className={`cursor-pointer p-3 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out
                ${activeTab === t.name ? 'bg-amber-500 text-white' : 'hover:bg-gray-700'}`}
            >
              {t.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
