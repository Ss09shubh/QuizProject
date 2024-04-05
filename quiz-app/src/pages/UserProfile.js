import React, { useEffect, useState } from 'react';
import '../styles/UserProfile.css';
import userprofile from '../images/userprofile.jpg';
import axios from 'axios';

const UserProfile = ({ action }) => {
  const [editedUser, setEditedUser] = useState({}); // State to store edited user data
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data from session storage when the component mounts
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setEditedUser(storedUser);
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the edited user data when input changes
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const { email, password } = editedUser;
      const updatedUserData = { email, password }; 

      const response = await axios.put(`http://localhost:5000/api/user/${editedUser.name}`, updatedUserData);
      console.log("Updated user data:", response.data.user);
  
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
  
      setEditedUser(response.data.user);
  
      action({
        type: 'EDIT-USER',
        payload: response.data.user
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  };
  return (
    <div className="profile-card">
      <div className="avatar">
        <img src={userprofile} alt="Profile" />
      </div>
      <div className="profile-details">
        <h6 type="text" name="name">
          {editedUser.name}
        </h6>
        <p>
          Email:{" "}
          {isEditing ? (
            <input type="text" name="email" value={editedUser.email} onChange={handleInputChange} />
          ) : (
            editedUser.email
          )}
        </p>
        {isEditing ? (
          <button className='btn btn-success' onClick={handleSaveClick}>Save</button>
        ) : (
          <button className='btn btn-secondary my-3' onClick={handleEditClick}>Update Profile</button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
