import React from "react";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Description for course 1",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description for course 2",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for course 3",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Courses</h3>
      <ul className="p-4 m-2">
        {courses.map((course) => (
          <li
            key={course.id}
            className="border-b border-gray-200 py-2 justify-center"
          >
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
