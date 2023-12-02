import React from "react";

function Budget({ budget }) {
  return (
    <div className="budget-wrapper border-2 p-2">
      <div className="budget-info flex justify-between gap-5">
        <h1>{budget.name}</h1>
        <div className="budget-info flex">
          <h1>{budget.used}</h1>/<h1>{budget.limit} ({budget.used/budget.limit*100}% used)</h1>
        </div>
      </div>
    </div>
  );
}

export default Budget;
