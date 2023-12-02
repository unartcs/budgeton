import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BudgetList from "../components/BudgetList";
import Gadgets from "../components/Gadgets";
import Home from "./Home";
import BudgetView from "../components/BudgetView";

function Main({ budgetUsed, budgetTotal, budgets, activeBudget, setActiveBudget }) {
  return (
    <div className="main-page-wrapper bg-slate-300 w-full flex h-full">
        <Routes>
          <Route
            index
            element={<Home budgetTotal={budgetTotal} budgetUsed={budgetUsed} />}
          />
          <Route path="/home" element={<Home budgetTotal={budgetTotal} budgetUsed={budgetUsed} />}/>
          <Route path="/budgets" element={<BudgetList budgets={budgets} activeBudget={activeBudget} setActiveBudget={setActiveBudget}/>} />
          <Route path="/budgets/*" element={<BudgetView activeBudget={activeBudget} setActiveBudget={setActiveBudget} />} />
        </Routes>
    </div>
  );
}

export default Main;
