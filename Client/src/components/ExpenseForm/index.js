import React, { useState } from "react";
import "../../App.css";
import { Form, Table } from "react-bootstrap";

const ExpenseForm = (props) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const [expenseAmount, setAmount] = useState(0);
  const [expenseCategory, setCategory] = useState("Rent");
  const [expenseDate, setDate] = useState(today);

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
    const expectedData = { expenseAmount, expenseCategory, expenseDate };
    console.log(expectedData);
    clearState();
    props.func(expectedData);
  };
  const clearState = () => {
    setDate(today);
    setAmount(0);
    setCategory("Rent");
  };

  return (
    <div>
      <div className="border border-success border-5 rounded">
        <h2>Add Expense</h2>
        <form
          className="form-inline justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="p-2 form-group">
            <label htmlFor="ExpenseCategory" className="p-2">
              Category
            </label>
            <select
              className="form-control p-2"
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
          <div className="p-2 form-group">
            <label htmlFor="expenseAmount" className="p-2">
              Amount
            </label>
            <input
              type="number"
              name="expenseAmount"
              id="expenseAmount"
              className="form-control p-2"
              value={expenseAmount}
              onChange={handleChangeAmount}
            />
          </div>
          <div className="p-2 form-group">
            <Form.Label className="p-2">Date</Form.Label>
            <Form.Control
              className="form-control p-2"
              type="date"
              name="expenseDate"
              placeholder="Expense Date"
              value={expenseDate}
              onChange={handleChangeDate}
            />
          </div>
          <button type="submit" id="save" className="btn btn-success mx-2">
            Save
          </button>
        </form>
      </div>
      <div>
        <Table className="table table-stripped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExpenseForm;
