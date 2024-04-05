import React, { useState } from 'react';
import '../styles/QuizResult.css'; // Import external CSS file
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function QuizResult() {
  const [feedback, setFeedback] = useState('');
  const location = useLocation();
  const { questions, selectedOptions, score } = location.state;

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const data = JSON.parse(sessionStorage.getItem('user'));
  console.log('data',data);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const userFeedback =
      {
        username: data.name,
        feedback
      }
      const response = await axios.post('http://localhost:5000/api/feedback', userFeedback)
      console.log('Feedback submitted:', feedback);
      setFeedback('');
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="quiz-result-container">
      <h2>Quiz Result</h2>
      <p>Score: {score}</p>
      {questions?.map((question, index) => (
        <div key={index} className="question-result">
          <h3>{question.question}</h3>
          <p>Selected Answer: {selectedOptions[index]}</p>
          <p>Correct Answer: {question.correct_answer}</p>
          <p>Explanation: {question.explanation}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="feedback" className="feedback-label">Please provide our feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleChange}
            className="feedback-textarea"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
      <p className='h6'>Click Below to go home</p>
      <button className='btn btn-outline-success border border-radius-4 text-primary'><a className='home-link' href="/main">Home</a></button>

    </div>
  );
}

export default QuizResult;
