import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Quiz.css'; // Import external CSS file
import { useLocation, useNavigate } from 'react-router-dom';

import Countdown from './Countdown';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(4).fill("")); // Initialize with empty strings
    const [answers, setAnswers] = useState({}); // Object to store selected answers
    const [userSelectedOptions, setUserSelectedOptions] = useState([]); // Array to hold user's selected options
    const [testSubmitted,setTestSubmitted] = useState(false);
    const [questionNo, setQuestionNo] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();

    const topicName = (location.state?.topic).toLowerCase();
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const topic = location.state?.topic;
                if (!topic) return;
                const response = await axios.get(`http://localhost:5000/api/questions/${topicName}`);
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [location]);

    const handleOptionChange = (event) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentQuestionIndex] = event.target.value;
        setSelectedOptions(newSelectedOptions);
    };

    const handleNextQuestion = () => {
        const newAnswers = { ...answers, [currentQuestionIndex]: selectedOptions[currentQuestionIndex] };
        setAnswers(newAnswers);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setQuestionNo(questionNo + 1);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setQuestionNo(questionNo - 1);

    };

    const handleSubmit = () => {
        const newAnswers = { ...answers, [currentQuestionIndex]: selectedOptions[currentQuestionIndex] };
        setAnswers(newAnswers);
        
        // Compare selected options with correct answers
        const correctAnswers = questions.map(question => question.correct_answer);

        // const explanation = questions.map(question => question.explanation);
        const userSelectedAnswers = Object.values(newAnswers);

        // Count the number of correct answers
        let correctCount = 0;
        userSelectedAnswers.forEach((selectedAnswer, index) => {
            if (selectedAnswer === correctAnswers[index]) {
                correctCount++;
            }
        });        
        
        alert("Test submitted!");
        setTestSubmitted(true);

        const finalscore = Math.round((correctCount / questions.length) * 100);
        navigate('/result', { state: { questions, selectedOptions , score:finalscore} });
        const archived = ()=>{
            if(finalscore<40)
                return "Failed";
            if(finalscore >= 40 && finalscore <= 100 )
                return "Passed";
        }
        handleSendData(finalscore,archived);
        
    };


    const handleSendData = async(score,achived) =>{

        const user = JSON.parse(sessionStorage.getItem('user'));
        const username = user.name;
        const quizData = {
            username:username,
            obtainedMarks:{
                [topicName]:score
            },
            achived:achived
        }

        const response = await axios.post('http://localhost:5000/api/result',quizData);
        alert("response.data",response.data);
    }


    return (
        <div className="quiz-main">
        {!testSubmitted && <Countdown seconds={70} onCountdownEnd={handleSubmit} />}
        <div className="quiz-container">
            {/* calling the countdown component */}

            {questions.length > 0 && currentQuestionIndex < questions.length ? (
                <div className="question-container">
                    <h6 className='h6'>{questionNo}) {questions[currentQuestionIndex].question}</h6>
                    <ul className='ul'>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} className='options'>
                                <label className='label'>
                                    <input className='input'
                                        type="radio"
                                        name="options"
                                        value={option}
                                        checked={selectedOptions[currentQuestionIndex] === option}
                                        onChange={handleOptionChange}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div className="button-container">
                        {currentQuestionIndex > 0 && (
                            <button className='button' id='prev-btn' onClick={handlePrevQuestion}>Previous</button>
                        )}
                        {currentQuestionIndex === questions.length - 1 ? (
                            <button className='button' id='submit-btn' onClick={handleSubmit}>Submit</button>
                        ) : (
                            <button className='button' id='next-btn' onClick={handleNextQuestion}>Next</button>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading questions...</p>
            )}

            {/* Display selected answers at the end of the quiz */}
            {currentQuestionIndex === questions.length && (
                <div className="answer-container">
                    <h3 className='h3'>Selected Answers:</h3>
                    <ul className='ul'>
                        {Object.entries(answers).map(([questionIndex, selectedAnswer]) => (
                            <li className='li' key={questionIndex}>
                                Question {parseInt(questionIndex) + 1}: {selectedAnswer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </div>
    );
}

export default Quiz;
