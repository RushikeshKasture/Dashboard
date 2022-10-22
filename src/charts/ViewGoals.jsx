import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

function ViewGoals() {
  const percentage = 66;
  return (
    <div style={{ width: "30%" }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}

export default ViewGoals;
