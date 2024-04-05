import React, { useState, useEffect } from 'react';
import '../styles/AdminCSS/UserResult.css'; // Import external CSS file
import UserResult from './UserResult';
import axios from 'axios';

const AdminMain = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/result');
                setResults(response.data);
                console.log('responsefrom admin',response.data);

            }
            catch (err) {
                console.log('error', err)
            }
        }
        fetchData();
    }, []);

    return (
        <div className="user-result-container">
            <h2 className="result-heading">User Results</h2>
            <UserResult userResultData={results} />
        </div>
    );
};

export default AdminMain;
