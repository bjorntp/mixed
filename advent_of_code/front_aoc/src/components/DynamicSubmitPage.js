import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './DynamicSubmitPage.css';

const DynamicSubmitPage = () => {
  const { id } = useParams(); // Get the dynamic `id` from the route
  const navigate = useNavigate();
  const location = useLocation(); // Access location information if needed
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      id,
      message: formData.get("message"),
    };

    let api = "http://localhost:8080/solutions/"
    if (id < 10) {
      api = api + "0";
    }
    // Send the data to the API
    fetch(api + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert(`Form submitted for Page ${id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className='MainBox'>
      <h1>Page {id}</h1>
      <p>Path: {location.pathname}</p> {/* Example usage of `useLocation` */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div>
          <label htmlFor="message" style={{ fontSize: "18px" }}>
            Enter your message:
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="30"
            required
            style={{ margin: "10px 0", padding: "10px", borderRadius: "5px" }}
          />
        </div>
        <button
          className='SubmitButton'
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className='BackToHomeButton'
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default DynamicSubmitPage;
