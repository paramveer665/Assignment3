import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  if (!user) {
    return <div className="text-center text-xl mt-10">Please log in to view your profile.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // In a real application, you would send formData to your backend here
    console.log('Saving data:', formData);
    updateUser(formData); // Update the user in AuthContext
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        {Object.keys(formData).map((key) => (
          <div className="mb-4" key={key}>
            <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</p>
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={formData[key] || ''}
                onChange={handleChange}
                className="text-xl font-semibold border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full"
              />
            ) : (
              <p className="text-xl font-semibold">{formData[key]}</p>
            )}
          </div>
        ))}
        {isEditing && (
          <button
            onClick={handleSave}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
