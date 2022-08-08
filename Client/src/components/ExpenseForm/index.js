import React, { useState } from "react";
import "../../App.css";
import { Form } from "react-bootstrap";

const ExpenseForm = () => {
  //Sets today as new date
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, "0");
  //   var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  //   var yyyy = today.getFullYear();
  //   today = mm + "/" + dd + "/" + yyyy;

  const [expenseAmount, setAmount] = useState(0);
  const [expenseCategory, setCategory] = useState("Rent");
  const [expenseDate, setDate] = useState(new Date());

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const expectedData = [expenseAmount, expenseCategory, expenseDate];
    console.log(expectedData);
  };

  return (
    <div class="border border-success border-5 rounded">
      <h2>Add Expense</h2>
      <form class="form-inline justify-content-center" onSubmit={handleSubmit}>
        <div class="p-2 form-group">
          <label htmlFor="ExpenseCategory" class="p-2">
            Category
          </label>
          <select
            class="form-control p-2"
            name="expenseCategory"
            id="expenseCategory"
            value={expenseCategory}
            onChange={handleChangeCategory}
          >
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Misc">Misc</option>
            <option value="Gas">Gas</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <div class="p-2 form-group">
          <label htmlFor="expenseAmount" class="p-2">
            Amount
          </label>
          <input
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            class="form-control p-2"
            value={expenseAmount}
            onChange={handleChangeAmount}
          />
        </div>
        <div class="p-2 form-group">
          <Form.Label class="p-2">Date</Form.Label>
          <Form.Control
            class="form-control p-2"
            type="date"
            name="expenseDate"
            placeholder="Expense Date"
            value={expenseDate}
            onChange={handleChangeDate}
          />
        </div>
        <button type="submit" id="save" class="btn btn-success mx-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
