import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'



function IncomeExpenses() {
      const [data, setData] = useState([]);

      const [inEditMode, setInEditMode] = useState({
      status: false,
      rowKey: null
  });

  const [ paycheckAmount, setPaycheckAmount] = useState(null);
  const [ rentAmount, setRentAmount ] = useState(null);
  const [ utilitiesAmount, setUtilitiesAmount ] = useState(null);
  const [ reoccurringBills, setreoccurringBills] = useState(null);
  const [ gasAmount, setGasAmount ] = useState(null);
  const [ foodAmount, setFoodAmount ] = useState(null);

  const onEdit = ({id, currentPaycheckAmount, currentRentAmount}) => {
      setInEditMode({
          status: true,
          rowKey: id
      })
      setPaycheckAmount(currentPaycheckAmount);
}

//fetch go here?
const updatePaycheck = ({id, newPaycheckAmount}) => {
    console.log("paycheck updated")
  // fetch(`${BILLION_DOLLAR_BUDGET_API_URL}/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //         income_source_amount: newUnitPrice
  //     }),
  //     headers: {
  //         "Content-type": "application/json; charset=UTF-8"
  //     }
  // })
  //     .then(response => response.json())
  //     .then(json => {
  //         // reset inEditMode and unit price state values
  //         onCancel();

  //         // fetch the updated data
  //         fetchInventory();
  //     })
}
const onSave = ({id, newPaycheckAmount}) => {
  updatePaycheck({id, newPaycheckAmount});
}

const onCancel = () => {
  // reset the inEditMode state value
  setInEditMode({
      status: false,
      rowKey: null
  })
  // reset the paycheckAmount state value
  setPaycheckAmount(null);
}
  

  return (
    <>
        <h3>Monthly Income</h3>
      <div>
        <Table striped brodered hover variant='dark'>
            <thead>
            <tr>
              <th>Paycheck</th>
              <th>Rent</th>
              <th>Utilities</th>
              <th>Reoccurring Bills</th>
              <th>Gas</th>
              <th>Food</th>
              <th>Action</th>
            </tr> 
            </thead>
          <tbody>
          {
              data.map((user) => (
                <tr key={user.id}>
                  <td>
                      {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={paycheckAmount}
                                 onChange={(event) => setPaycheckAmount(event.target.value)}
                              />
                          ) : (  
                              user.paycheck
                          )
                      }
                  </td>
                  <td>
                  {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={rentAmount}
                                 onChange={(event) => setRentAmount(event.target.value)}
                              />
                          ) : (  
                              user.rent
                          )
                      }
                  </td>
                  <td>
                  {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={utilitiesAmount}
                                 onChange={(event) => setUtilitiesAmount(event.target.value)}
                              />
                          ) : (  
                              user.utilities
                          )
                      }
                  </td>
                  <td>
                  {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={reoccurringBills}
                                 onChange={(event) => setreoccurringBills(event.target.value)}
                              />
                          ) : (  
                              user.reoccurringBills
                          )
                      }
                  </td>
                  <td>
                  {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={gasAmount}
                                 onChange={(event) => setGasAmount(event.target.value)}
                              />
                          ) : (  
                              user.gas
                          )
                      }
                  </td>
                  <td>
                      {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={foodAmount}
                                 onChange={(event) => setFoodAmount(event.target.value)}
                              />
                          ) : (  
                              user.food
                          )
                      }
                  </td>
                  <td>
                     {
                        inEditMode.status && inEditMode.rowKey === user.id ? (
                          <>
                              <button                     
                                className={"btn btn-success"}
                                onClick={() => onSave({id: user.id, newPaycheckAmount: paycheckAmount})}
                              >Save
                              </button>

                              <button
                                className={"btn btn-secondary"}
                                style={{marginLeft: 8}}
                                onClick={() => onCancel()}
                              >Cancel
                              </button>
                          </>
                      ) : (
                              <button
                                className={"btn btn-primary"}
                                onClick={() => onEdit({id: user.id, paycheckAmount: user.paycheck_amount})}
                              >Edit</button>
                                    )
                      }
                  </td>
                </tr>
              ))
          }
          </tbody>
         </Table>
      </div>
      <div>
          <h3>Monthly Expense (fill in amounts to add your total expenses)</h3>
          <table>
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
         </table>
         <hr/>
        <input type='text' />
        <button className='btn btn-primary'>add expenses</button>
        </div>
      </>

    );
  }


    export default IncomeExpenses;
    