import React from "react";

function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "Assignment 1",
      description: "Description for assignment 1",
    },
    {
      id: 2,
      title: "Assignment 2",
      description: "Description for assignment 2",
    },
    {
      id: 3,
      title: "Assignment 3",
      description: "Description for assignment 3",
    },
  ];

  return (
    <div>
      <h2>Assignments</h2>
      <ul className="p-4 m-2">
        {assignments.map((assignment) => (
          <li
            key={assignment.id}
            className="border-b border-gray-200 py-2 justify-center"
          >
            <h3 className="text-lg font-semibold">{assignment.title}</h3>
            <p className="text-gray-600">{assignment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
