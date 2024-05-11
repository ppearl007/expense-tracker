import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

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
            <input
              type="text"
              placeholder="Description"
              required
              className="border border-slate-300 rounded-sm p-1 m-2"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              className="border border-slate-300 rounded-sm p-1 m-2"
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              className="m-1"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense" className="m-1">
              Expense
            </label>
            <input
              type="radio"
              id="income"
              value="income"
              className="m-1"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income" className="m-1">
              Income
            </label>

            <button
              className="submit bg-blue-500 rounded-md p-1"
              type="submit"
              onClick={onSubmit}
            >
              Add Transaction
            </button>
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
