import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../../styles/Home.css";
import "react-bootstrap";
import { ModifyBudget } from "../ModifyBudget";
import Chart from "../Chart";
import Balance from "../Balance";
import ExpenseForm from "../ExpenseForm";

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

function IncomeExpenses() {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [rentAmount, setRentAmount] = useState(0);
  const [utilitiesAmount, setUtilitiesAmount] = useState(0);
  const [miscAmount, setMisc] = useState(0);
  const [gasAmount, setGasAmount] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  // const [ currentBudget, setCurrentBudget ] = useEffect('')

  //fetch go here?
  // const updatePaycheck = ({id, newmonthlyIncome}) => {
  //     console.log("paycheck updated")
  // }

  return (
    <>
      <div>
        <Balance
          monthlyIncome={monthlyIncome}
          rent={rentAmount}
          gas={gasAmount}
          utilities={utilitiesAmount}
          misc={miscAmount}
          food={foodAmount}
        ></Balance>
        <h2>Actual Amount Spent Per Category</h2>
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>
                <h3>Item</h3>
              </th>
              <th>
                <h3>Amount</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="main-text">Monthly Income</td>
              <td>
                <input
                  value={monthlyIncome}
                  onChange={(event) => setMonthlyIncome(event.target.value)}
                  type="text"
                  id="paycheck"
                  placeholder="Enter monthly income here."
                />
              </td>
            </tr>
            <tr>
              <td className="main-text">Rent</td>
              <td>
                <input
                  value={rentAmount}
                  onChange={(event) => setRentAmount(event.target.value)}
                  type="text"
                  id="rent"
                />
              </td>
            </tr>
            <tr>
              <td className="main-text">Utilities</td>
              <td>
                <input
                  value={utilitiesAmount}
                  onChange={(event) => setUtilitiesAmount(event.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td className="main-text">Misc. Charges</td>
              <td>
                <input
                  value={miscAmount}
                  onChange={(event) => setMisc(event.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td className="main-text">Gas</td>
              <td>
                <input
                  value={gasAmount}
                  onChange={(event) => setGasAmount(event.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td className="main-text">Food</td>
              <td>
                <input
                  value={foodAmount}
                  onChange={(event) => setFoodAmount(event.target.value)}
                  type="text"
                />
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </Table>
        <br />
        <button onClick={ModifyBudget} className="btn btn-secondary">
          {" "}
          (Paycheck - Expenses) ={" "}
        </button>
      </div>
      <Chart
        rent={rentAmount}
        gas={gasAmount}
        utilities={utilitiesAmount}
        misc={miscAmount}
        food={foodAmount}
      ></Chart>
      <ExpenseForm></ExpenseForm>
    </>
  );
}

export default IncomeExpenses;
