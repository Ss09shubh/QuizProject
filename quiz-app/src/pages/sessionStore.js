import React, { useState, useEffect } from 'react';

const SessionStore = ({ initialUserData }) => {
  // Define state variables to manage data
  const [userData, setUserData] = useState(initialUserData);

  // Function to save user data to session storage
  const saveUserData = (data) => {
    sessionStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  };

  // Example function to update user data
  const updateUserData = () => {
    const newData = { username: 'example' }; // Example new data
    saveUserData(newData);
  };

  return (
    <div>
      <h2>Session Store</h2>
      {/* Display user data */}
      {userData && (
        <div>
          <h3>User Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
      {/* Button to update user data */}
      <button onClick={updateUserData}>Update User Data</button>
    </div>
  );
};

export default SessionStore;
