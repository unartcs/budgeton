import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Item from "../classes/ItemClass";
import uniqid from "uniqid";
import ItemList from "./ItemList";

function BudgetView({ activeBudget, setActiveBudget, budgets, setBudgets, currency }) {
  const [itemName, setItemName] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [itemQuanitity, setItemQuantity] = useState(1);
  useEffect(() => {
    // console.log(activeBudget)
    // setActiveBudget(JSON.parse(window.localStorage.getItem("ACTIVE_BUDGET")))
    
  }, []);
  const nameHandler = (e) => {
    setItemName(e.target.value);
  };
  const priceHandler = (e) => {
    setItemPrice(e.target.value);
  };
  const quantityHandler = (e) => {
    setItemQuantity(e.target.value);
  };

  const formHandler = (x) => {
    x.preventDefault();
    console.log(budgets)
    let newItem = new Item(uniqid(), activeName, activePrice);
    // activeBudget.addItem(newItem)
    //let findActiveBudget = budgets.findIndex(activeBudget);
    //console.log(findActiveBudget)
    // console.log(findActiveBudget);
    setItemName("");
    setItemPrice("");
    setItemQuantity(1)
  };
  return (
    <div className="budgetview-wrapper">
      <div className="budgetview-info flex justify-between gap-5">
        <h1>{activeBudget.name}</h1>
        <h1>
          {activeBudget.used} / {activeBudget.limit}
        </h1>
      </div>
      <form className="form-wrapper flex gap-5">
        <fieldset className="form-field flex flex-col">
          <label>Name: </label>
          <input
            type="text"
            name="item_name"
            value={itemName}
            onChange={nameHandler}
            placeholder="Item..."
          />
        </fieldset>
        <fieldset className="form-field flex flex-col">
          <label>Price: </label>
          <input
            type="number"
            name="item_price"
            value={itemPrice}
            onChange={priceHandler}
            placeholder="Price..."
          />
        </fieldset>
        <fieldset className="form-field flex flex-col">
          <label>Quantity: </label>
          <input
            type="number"
            name="item_quantity"
            value={itemQuanitity}
            min={1}
            max={99}
            onChange={quantityHandler}
            placeholder="Quantity..."
          />
        </fieldset>
        <fieldset className="form-field flex flex-col">
          <label>Total:</label>
          {itemPrice*itemQuanitity ? <label>{itemPrice*itemQuanitity}</label> : '0'}
          
        </fieldset>
        <button
          onClick={(x) => {
            formHandler(x);
          }}
        >
          Add
        </button>
      </form>
      <ItemList
        activeBudget={activeBudget}
        budgets={budgets}
        setBudgets={setBudgets}
      />
    </div>
  );
}

export default BudgetView;
