import React, { useEffect } from "react";

function Budget({ budget, currency }) {
  return (
    <div className="budget-wrapper border-2 p-2">
      <div className="budget-info flex justify-between gap-5" key={budget.id}>
        {budget.name}
        {currency !== "$" ? (
          <div className="flex gap-2">
            <div className="budget-info-used flex">
              <h1>{budget.used}</h1>
              <h1>{currency}</h1>
            </div>
            <h1>/</h1>

            <div className="budget-info-limit flex">
              <h1>{budget.limit}</h1>
              <h1>{currency}</h1>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="budget-info-used flex flex-row-reverse">
              <h1>{budget.used}</h1>
              <h1>{currency}</h1>
            </div>
            <h1>/</h1>
            <div className="budget-info-limit flex flex-row-reverse">
              <h1>{budget.limit}</h1>
              <h1>{currency}</h1>
            </div>
          </div>
        )}
        <h1>({(budget.used / budget.limit) * 100}% used)</h1>
      </div>
    </div>
  );
}

export default Budget;
