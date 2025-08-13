import React from "react";

function DegreeProgram() {
  const degreeInfo = {
    program: "Bachelor of Science in Computer Science",
    duration: "4 years",
    university: "Example University",
    courses: ["Data Structures", "Algorithms", "Web Development"],
    joinDate: "2023-09-01",
    batch: "2023-2027",
  };
  return (
    <div>
      <h2>Degree Program Information</h2>
      <ul>
        <li>Program: {degreeInfo.program}</li>
        <li>Duration: {degreeInfo.duration}</li>
        <li>University: {degreeInfo.university}</li>
        <li>Courses: {degreeInfo.courses.join(", ")}</li>
        <li>Join Date: {degreeInfo.joinDate}</li>
        <li>Batch: {degreeInfo.batch}</li>
      </ul>
    </div>
  );
}

export default DegreeProgram;
