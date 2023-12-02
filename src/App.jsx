import { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import Budget from "./classes/BudgetClass";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

function App() {
  const [activeBudget, setActiveBudget] = useState()
  const [budgetTotal, setBudgetTotal] = useState(2000);
  const [budgetUsed, setBudgetUsed] = useState(1600);
  let budget1 = new Budget("Groceries", 500);
  let budget2 = new Budget("School", 200, 40, [
    {
      name: "Pen",
      price: 5,
    },
  ]);
  const budgets = [budget1, budget2];
  return (
    <div className="app-wrapper flex h-screen">
      <div className="top-wrapper">
        <Navbar />
      </div>
      <div className="mid-page flex flex-col w-screen">
        <div className="navbar-wrapper">
          <Topbar />
        </div>
        <div className="main-page h-full">
          <Main
            budgetTotal={budgetTotal}
            budgetUsed={budgetUsed}
            budgets={budgets}
            activeBudget={activeBudget}
            setActiveBudget={setActiveBudget}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
