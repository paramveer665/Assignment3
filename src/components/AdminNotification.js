import React from "react";

function AdminNotification() {
  const notification = [
    { id: 1, message: "New user registration", date: "2023-10-01" },
    { id: 2, message: "Course assignment due", date: "2023-10-05" },
    { id: 3, message: "Profile update required", date: "2023-10-10" },
  ];
  return (
    <div>
      <h2>Admin Notifications</h2>
      <ul>
        {notification.map((note) => (
          <li key={note.id}>
            {note.message} - {note.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNotification;
