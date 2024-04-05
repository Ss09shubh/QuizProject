// Main.js

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Main.css';
export const Main = () => {
  // const location = useLocation();
  // const user = location.state?.user;
  // const [topic ,setTopic] = useState();
  const navigate = useNavigate(); 

  const handleTopicSelection = async (topic) => {
  try {  
  navigate('/instruction', { state: { topic: topic } });
  // navigate('/quiz', { state: { topic: topic } });
  } catch (error) {
    console.error('Error navigating to quiz component:', error);
  }
};

const topics = ['HTML','CSS','JavaScript','Java','Python','PHP','Csharp','ReactJS']

  return (
    <>
    <p className='h2'>
      Subjects
  <small class="text-muted"> for start Quiz</small>
</p>
    <div className="main-container">
    {topics?.map((item)=>{
      return (
           <span className="topic" onClick={() => handleTopicSelection(item)}>{item}</span>
      )
    })}
    </div>
        </>
    )
};
