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
    <div className=" bg-red-400 border border-solid border-amber-950 h-75 w-75">
      <ul className="flex flex-col items-start m-2 ">
        {tabs.map((t, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveTab(t.name);
            }}
            className="cursor-pointer hover:bg-amber-300 w-full text-2xl font-bold p-2 border-b"
          >
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
