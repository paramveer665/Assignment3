import { useContext } from "react";
import TabContext from "../context/TabContext";
import PersonalData from "./PersonalData";

import Courses from "./Courses";
import Assignments from "./Assignments";
import Cgpa from "./Cgpa";
import GuardianData from "./GuardianData";
import AdminNotification from "./AdminNotification";
import DegreeProgram from "./DegreeProgram";

const Dashboard = () => {
  const { activeTab } = useContext(TabContext);

  return (
    <div className="flex-1 p-4">
      {activeTab === "Dashboard" && (
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 p-4 border rounded-lg shadow-md bg-white">
            <PersonalData />
          </div>
          <div className="col-span-1 p-4 border rounded-lg shadow-md bg-white">
            <GuardianData />
          </div>
          <div className="col-span-1 p-4 border rounded-lg shadow-md bg-white">
            <AdminNotification />
          </div>
          <div className="col-span-1 p-4 border rounded-lg shadow-md bg-white">
            <DegreeProgram />
          </div>
        </div>
      )}

      {activeTab === "Cgpa" && <Cgpa />}
      {activeTab === "COURSES" && <Courses />}
      {activeTab === "Assignments" && <Assignments />}
    </div>
  );
};

export default Dashboard;
