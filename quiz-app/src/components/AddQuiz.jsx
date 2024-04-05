import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddQuiz.css'; // Import the CSS file for styling
import axios from 'axios';
const AddQuiz = () => {
    const [formData, setFormData] = useState({
        topic: '',
        question: '',
        options: ['', '', '', ''],
        correct_answer: '',
        explanation: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/questions',formData)
        console.log(formData);
        console.log('response',response.data)
        navigate('/admin');
    };

    return (
        <div className="add-quiz-container">
            <h2>Add New Quiz Question</h2>
            <form onSubmit={handleSubmit} className="add-quiz-form">
                <div className="form-group">
                    <label htmlFor="topic">Topic:</label>
                    <input
                        type="text"
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <textarea
                        id="question"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        className="textarea-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="options">Options:</label>
                    {formData.options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            value={option}
                            onChange={(e) => {
                                const newOptions = [...formData.options];
                                newOptions[index] = e.target.value;
                                setFormData({
                                    ...formData,
                                    options: newOptions
                                });
                            }}
                            className="input-field"
                        />
                    ))}
                </div>
                <div className="form-group">
                    <label htmlFor="correct_answer">Correct Answer:</label>
                    <input
                        type="text"
                        id="correct_answer"
                        name="correct_answer"
                        value={formData.correct_answer}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="explanation">Explanation:</label>
                    <textarea
                        id="explanation"
                        name="explanation"
                        value={formData.explanation}
                        onChange={handleChange}
                        className="textarea-field"
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AddQuiz;
