import { useContext } from "react";
import Dashboard from "./Dashboard";
import TabContext from "../context/TabContext";

import Courses from "./Courses";
import Assignments from "./Assignments";
import Cgpa from "./Cgpa";

const Hero = () => {
  const { activeTab } = useContext(TabContext);

  return (
    <>
      {activeTab === "Dashboard" && <Dashboard />}

      {activeTab === "Cgpa" && <Cgpa />}
      {activeTab === "COURSES" && <Courses />}
      {activeTab === "Assignments" && <Assignments />}
    </>
  );
};

export default Hero;
