import React, { Fragment, useState } from 'react';
import '../styles/Instruction.css'; // Import CSS file for styling
import { useLocation, useNavigate } from 'react-router-dom';

const Instructions = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const topic = location.state?.topic;

    // Array of instructions
    const instructions = [
        "You will be asked 10 questions one after another.",
        "10 points will be awarded for the correct answer.",
        "Each question has four options. You can choose only one option.",
        "It is mandatory to answer all questions and skipping is not possible.",
        "You can revisit the questions by clicking on the prev and next buttons.",
        "You can review and change answers before the quiz finishes.",
        "The result will be declared at the end of the quiz."
    ];

    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };

    const sendTopic = () => {
        try {
            if (checkboxChecked) {
                navigate('/quiz', { state: { topic: topic } });
            } else {
                alert("Please read all instructions and check the box before starting the quiz.");
            }
        } catch (error) {
            console.error('Error navigating to quiz component:', error);
        }
    };

    return (
        <div className="instructions-container">
            <h2>Instructions</h2>
            <div className='instruction-grid'>
                {instructions.map((instruction, index) => (
                    <div className='wrap-index-topic' key={index}>
                        <span>{index + 1})</span>
                        <span className="instruction-item">
                            {instruction}
                        </span>
                    </div>
                ))}
            </div>

            <label className='label-checkbox'>
                <input
                    className='in-check'
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                />
                I have read all instructions.
            </label>
            <div>
                <button className='start-quiz-btn' onClick={sendTopic}>Start Quiz</button>
            </div>
        </div>
    );
};

export default Instructions;
