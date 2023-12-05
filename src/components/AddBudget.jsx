import React, { useRef, useState } from "react";
import uniqid from "uniqid";
import Budget from "../classes/BudgetClass";
function AddBudget({ budgets, setBudgets }) {
  const [budgetName, setBudgetName] = useState('');
  // const [budgetLimit, setBudgetLimit] = useState('');
  // const [budgetUsed, setBudgetUsed] = useState('');
  const limitRef = useRef(0);
  const usedRef = useRef(0);
  const budgetNameHandler = (e) => {
    setBudgetName(e.target.value);
  };
  const budgetLimitHandler = (e) => {
    console.log(limitRef.current)
    limitRef.current = e.target.value;
    // setBudgetLimit(e.target.value);
  };
  const budgetUsedHandler = (e) => {
    if (e.target.value) {
      console.log(usedRef.current)
      usedRef.current = e.target.value
    } else {
      usedRef.current = 0;
    }
  };
  const budgetFormHandler = (e) => {
    e.preventDefault();
    if (usedRef.current > limitRef.current) {
      console.log("Cannot use more than you set limit!");
    } else {
      let newBudget = new Budget(uniqid(), budgetName, limitRef.current, usedRef.current);
      setBudgets([...budgets, newBudget]);
      console.log(budgets);
    }
  };
  return (
    <div className="addbudget-wrapper m-2">
      <form className="addbudget-form flex gap-5">
        <input
          type="text"
          name="budget_name"
          placeholder="Budget name..."
          value={budgetName}
          onChange={budgetNameHandler}
          required
        />
        <input
          type="number"
          name="budget_limit"
          placeholder="Limit..."
          onChange={(e)=> {limitRef.current = e.target.value}}
          required
        />
        <input
          type="number"
          name="budget_used"
          placeholder="Used... (default 0)"
          onChange={(e)=> {usedRef.current = e.target.value}}
        />
        <button
          className="addbudget-button border-2 p-2 bg-slate-600 text-white"
          type="submit"
          onClick={budgetFormHandler}
        >
          Add Budget
        </button>
      </form>
    </div>
  );
}

export default AddBudget;
