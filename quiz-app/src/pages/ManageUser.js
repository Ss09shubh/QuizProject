import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Admin.css'
const ManageUser = () => {
    

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    const handleDeleteUser = async (username) => {
        try {
            await axios.delete(`http://localhost:5000/api/user/${username}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='user-management-container'>

    <h2 className='user-management-heading'>Manage User</h2>
    <ul className='user-list'>
        {users.map(user => (
            <li className='user-item' key={user.id}>
                <span>{user.name}</span>
                <button className='delete-button' onClick={() => handleDeleteUser(user.name)}>Delete</button>
            </li>
        ))}
    </ul>
</div>  
    );
};

export default ManageUser;
