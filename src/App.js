import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    // Input Validation
    if (height === "" || weight === "") {
      alert("Please enter both height and weight!");
      return;
    }
    if (height <= 0 || weight <= 0) {
      alert("Height and Weight must be positive numbers!");
      return;
    }

    // BMI Formula
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);

    // Determine BMI Status
    let bmiStatus = "";
    if (calculatedBMI < 18.5) {
      bmiStatus = "Underweight";
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
      bmiStatus = "Normal weight";
    } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obese";
    }
    setStatus(bmiStatus);
  };

  // Styling for BMI status colors
  const getStatusColor = () => {
    switch (status) {
      case "Underweight":
        return { color: "#3498db" }; // Blue
      case "Normal weight":
        return { color: "#27ae60" }; // Green
      case "Overweight":
        return { color: "#f39c12" }; // Orange
      case "Obese":
        return { color: "#e74c3c" }; // Red
      default:
        return {};
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>BMI Calculator</h1>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={styles.input}
          placeholder="Enter your height"
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
          placeholder="Enter your weight"
        />
      </div>

      <button onClick={calculateBMI} style={styles.button}>
        Calculate BMI
      </button>

      {bmi && (
        <div style={styles.resultBox}>
          <h2>Your BMI: {bmi}</h2>
          <h3 style={getStatusColor()}>Status: {status}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Poppins, sans-serif",
    background: "#f4f6f7",
    padding: "40px",
    borderRadius: "20px",
    width: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontWeight: "600",
    marginRight: "10px",
  },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "200px",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "30px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default App;
