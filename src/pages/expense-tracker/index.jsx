import React from "react";

export const ExpenseTracker = () => {
  return (
    <>
    <div className="expense-tracker">
      <div className="container">
        <h1>Expense Tracker</h1>
        <div className="">
          <h3>Your Balance</h3>
          <h2>$0.00 </h2>
        </div>
        <div className="summary">
          <div>
            <h4>Income</h4>
            <p>$0</p>
          </div>
          <div>
            <h4>Expenses</h4>
            <p>$0</p>
          </div>
        </div>
        <form className="">
            <input type="text" placeholder="Description" required className="border border-slate-300 rounded-sm p-1 m-2"/>
            <input type="number" placeholder="Amount" required className="border border-slate-300 rounded-sm p-1 m-2"/>
            <input type="radio" id="expense" value="expense" className="m-1"/>
            <label htmlFor="expense" className="m-1">Expense</label>
            <input type="radio" id="income" value="income" className="m-1"/>
            <label htmlFor="income"className="m-1">Income</label>

            <button className="submit bg-blue-500 rounded-md p-1" type="submit">Add Transaction</button>
        </form>
      </div>
    </div>

    <div className="transactions">
        <div>
            <h3 className="font-bold">Transactions</h3>
        </div>
    </div>
    </>
  );
};
