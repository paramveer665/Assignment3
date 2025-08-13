import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="text-center text-xl mt-10">Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <p className="text-gray-600">Name:</p>
          <p className="text-xl font-semibold">{user.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Email:</p>
          <p className="text-xl font-semibold">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Student ID:</p>
          <p className="text-xl font-semibold">{user.studentId}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Program:</p>
          <p className="text-xl font-semibold">{user.program}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Date of Birth:</p>
          <p className="text-xl font-semibold">{user.dob}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Address:</p>
          <p className="text-xl font-semibold">{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
