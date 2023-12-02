import React from "react";

function BudgetGadget({ budgetUsed, budgetTotal }) {
  const negativeBudget = (budgetUsed / budgetTotal) * 100 > 50;
  return (
    <div
      className="budget-gadget-wrapper max-w-xs w-52 h-fit shadow-lg m-2"
      style={{
        background: `rgb(${(budgetUsed / budgetTotal) * 100 * 2.55},${
          (budgetTotal / budgetUsed) * 10 * 5
        },0)`,
      }}
    >
      {negativeBudget ? "" : ""}
      <div className="budget-gadget-div p-2 border-2 align-middle items-center">
        <div className="budget-info flex flex-col gap-5">
          <div className="budget-info-top flex justify-between text-2xl">
            <h1 className="info-name">Budget</h1>
          </div>
          <h2 className="info-details text-lg">
            ${budgetUsed} / ${budgetTotal} ({(budgetUsed / budgetTotal) * 100}%)
          </h2>
          <a className="underline text-blue-700" href="#">
            to all budgets..
          </a>
        </div>
      </div>
    </div>
  );
}

export default BudgetGadget;
