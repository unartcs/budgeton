import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function TotalBudgetGadget() {
  return (
    <div className="totalgadget-wrapper  w-52">
      <div className="top-section flex justify-between">
        <h1>Total Budget</h1>
        <h2>...</h2>
      </div>
      <div className="info-section w-52 h-52">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
      </div>
    </div>
  );
}

export default TotalBudgetGadget;
