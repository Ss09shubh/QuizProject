import React, { useEffect, useState } from 'react';
import '../styles/Home.css'; // Import external CSS file
import quizBackground from '../images/quizBackground3.jpg'

function Home() {
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    setIsAdmin(user?.admin ? true : false);
  }, []);
console.log('first',isAdmin)
  return (
    <div className="home-container">
      <div className="quote-text">
        <h3>"Before Anything else,Preparation is the key to success"</h3>
        <p id='author-name'>-- Alexender graham Bell</p>
      </div>
      {isAdmin ? ( 
        <div className="admin-btns">
          <a href="/addquiz"><button className='adm-btn'>Add Quiz</button></a>
          <a href="/manage"><button className='adm-btn'>Manage User</button></a>
          <a href="/admin"><button className='adm-btn'>User results</button></a>
          <a href="/feedback"><button className='adm-btn'>See Feedback</button></a>
        </div>
      ) : null}
      <div className="background-image"></div>
    </div>
  );
}

export default Home;
