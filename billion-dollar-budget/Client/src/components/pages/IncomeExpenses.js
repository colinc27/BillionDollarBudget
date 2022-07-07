import React from 'react'
import Table from 'react-bootstrap/Table'

const IncomeExpenses = () => {
  return (
    <>
        <h3>Monthly Income (fill in amounts to add your total income)</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Income Source 1</td>
            <td>$3800</td>
          </tr>
          <tr>
            <td>Income Source 2</td>
            <td>$2800</td>

          </tr>
          <tr>
            <td>other</td>
            <td>$1000</td>

          </tr>
        </tbody>
      </Table>
        <h3>Monthly Expense (fill in amounts to add your total expenses)</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Utilities</td>
              <td>$120</td>
            </tr>
            <tr>
              <td>Cell Phone</td>
              <td>$180</td>
            </tr>
            <tr>
              <td>Groceries</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Total Car Payments</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Credit Card Payments</td>
              <td>$400</td>
            </tr>
          </tbody>
        </Table>


      </>

        )
        }







        export default IncomeExpenses
  
