import React, { useState } from "react";
import PersonalData from "./PersonalData";
import GuardianData from "./GuardianData";
import AdminNotification from "./AdminNotification";
import DegreeProgram from "./DegreeProgram";

function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 border border-solid">
      <PersonalData />
      <GuardianData />
      <DegreeProgram />
      <AdminNotification />
    </div>
  );
}

export default Dashboard;
