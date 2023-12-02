import React from "react";
import Budget from "./Budget";
import { Link } from "react-router-dom";

function BudgetList({ budgets, activeBudget, setActiveBudget }) {

  return (
    <div className="budget-list-wrapper w-full">
      {budgets?.map((item) => {
        return (
          <div className="budget-wrapper flex gap-5" key={item.name} onClick={()=> {
            setActiveBudget(item)
          }}>
            <Link to={`/budgets/${item.name}`}>
              <Budget budget={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BudgetList;
