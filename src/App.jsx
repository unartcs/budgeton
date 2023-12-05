import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import Budget from "./classes/BudgetClass";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

function App() {
  const [activeBudget, setActiveBudget] = useState()
  const [budgetTotal, setBudgetTotal] = useState(2000);
  const [budgetUsed, setBudgetUsed] = useState(1600);
  const [budgets, setBudgets] = useState([])
  const [currency, setCurrency] = useState('$')
  // let budget1 = new Budget(1, "Groceries", 500);
  // let budget2 = new Budget(2, "School", 200, 40, [
  //   {
  //     name: "Pen",
  //     price: 5,
  //   },
  // ]);
  // const budgets = [budget1, budget2];
  useEffect(()=> {
    // let active = JSON.parse(window.localStorage.getItem('ACTIVE_BUDGET'))
    // setActiveBudget(budgets.find(JSON.parse(window.localStorage.getItem('ACTIVE_BUDGET'))))

  },[])

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
            setBudgets={setBudgets}
            activeBudget={activeBudget}
            setActiveBudget={setActiveBudget}
            currency={currency}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
