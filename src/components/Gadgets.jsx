import React from "react";
import BudgetGadget from "../gadgets/BudgetGadget";

function Gadgets({budgetUsed, budgetTotal}) {
  return (
    <div className="gadgets-wrapper grid grid-flow-col">
      <BudgetGadget budgetTotal={budgetTotal} budgetUsed={budgetUsed} />
      <BudgetGadget budgetTotal={budgetTotal} budgetUsed={budgetUsed} />
      <BudgetGadget budgetTotal={budgetTotal} budgetUsed={budgetUsed} />
      <BudgetGadget budgetTotal={budgetTotal} budgetUsed={budgetUsed} />
      <BudgetGadget budgetTotal={budgetTotal} budgetUsed={budgetUsed} />
    </div>
  );
}

export default Gadgets;
