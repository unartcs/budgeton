import React from "react";
import Budget from "./Budget";
import { Link } from "react-router-dom";
import AddBudget from "./AddBudget";

function BudgetList({ budgets, activeBudget, setActiveBudget, setBudgets, currency }) {

  return (
    <div className="budget-list-wrapper w-full">
      <AddBudget budgets={budgets} setBudgets={setBudgets}/>
      {budgets?.map((item) => {
        return (
          <div className="budget-wrapper flex gap-5" key={item.id} onClick={()=> {
            setActiveBudget(item)
            window.localStorage.setItem('ACTIVE_BUDGET', JSON.stringify(item))
          }}>
            <Link to={`/budgets/${item.name}`}>
              <Budget budget={item} budgets={budgets} setBudgets={setBudgets} currency={currency}/>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BudgetList;
