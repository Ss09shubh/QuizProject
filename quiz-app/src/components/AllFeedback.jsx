import React, { useEffect, useState } from "react";
import "../styles/Feedback.css"; // Add your styles for the feedback component here
import axios from "axios";

function AllFeedback() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data from the backend when the component mounts
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/feedback");
        const data = await response.data;
        
        // Extracting username and feedback fields
        const formattedData = data.map((feedbackItem) => ({
          username: feedbackItem.username,
          feedback: feedbackItem.feedback,
        }));

        console.log("formattedData", formattedData);
        setFeedbackData(formattedData);
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div className="feed-container col-6 offset-3 mt-3">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
          <th className="">username</th>
          <th>feedback</th>
          </tr>
        </thead>
        {feedbackData.map((feedbackItem, index) => (
          <tr key={index} className="feedback-row">
            <td className="username">{feedbackItem.username}</td>
            <td className="feedback">{feedbackItem.feedback}</td>
          </tr>
        ))}
      </table>

    </div>
  );
}

export default AllFeedback;

