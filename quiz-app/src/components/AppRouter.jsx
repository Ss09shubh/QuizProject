import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Quiz from './Quiz';
import Header from './Header';
import { Main } from './Main';
import QuizResult from './QuizResult';
import Home from './Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ManageUser from '../pages/ManageUser';
import AddQuiz from './AddQuiz';
import UserProfile from '../pages/UserProfile';
import axios from 'axios';
import Instructions from './Instruction';
import Footer from './Footer';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import AdminMain from './AdminMain';
import UserResult from './UserResult';
import AllFeedback from './AllFeedback';

function AppRouter() {
  const [user, setUser] = useState({}); // User data state
  const [userResponseData, setUserResponseData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');



  const handleLoginActions = async (act) => {
    switch (act?.type) {
      case 'LOGIN-CLICK':
        const { type = '', payload = {} ,navigate} = act;
        console.log('from login click', act);
        try {
          const response = await axios.post('http://localhost:5000/api/login', payload);
          const { msg, user } = response.data;
          setUser(user)
          setUserResponseData(response);
          if (msg === 'Sucess') {
            sessionStorage.setItem('user', JSON.stringify(user));
            user?.admin ? navigate('/') : navigate('/main');
          } else {
            <h2>User or password incorrect</h2>
            setErrorMessage('User or password incorrect'); // Set error message if login fails
            act.onError && act.onError(msg);
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
        break;
      default:
        console.log('unknown action', act);
        break;
    }
  };

  const handleUserAction = (act)=>{
    const {type='',payload={}} = act;
    console.log('act',act)
    switch(type)
    {
      case 'EDIT-USER':
        console.log(payload,'payload')
        setUser(payload)
      break;
      default:
        console.log('unknown action',act)
      break;
    }
  }
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<QuizResult />} />
        <Route
          path="/login"
          element={<Login action={handleLoginActions} errorMessage={errorMessage}/>}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/addquiz" element={<AddQuiz />} />
        <Route path="/manage" element={<ManageUser />} />
        <Route path="/feedback" element={<AllFeedback />} />
        <Route path="/user" element={<UserProfile user={user} action={handleUserAction}/>} />
        <Route path="/instruction" element={<Instructions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default AppRouter;
