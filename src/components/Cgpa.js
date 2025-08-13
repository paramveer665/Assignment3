import React from "react";

function Cgpa() {
  const semesters = [
    {
      id: 1,
      name: "Semester 1",
      gpa: 3.5,
    },
    {
      id: 2,
      name: "Semester 2",
      gpa: 3.8,
    },
    {
      id: 3,
      name: "Semester 3",
      gpa: 3.2,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">CGPA</h3>
      <ul className="p-4 m-2">
        {semesters.map((semester) => (
          <li
            key={semester.id}
            className="border-b border-gray-200 py-2 justify-center"
          >
            <h3 className="text-lg font-semibold">{semester.name}</h3>
            <p className="text-gray-600">GPA: {semester.gpa}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cgpa;
