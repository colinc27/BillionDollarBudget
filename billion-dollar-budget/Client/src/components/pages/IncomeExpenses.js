import React, { useState } from 'react'



function IncomeExpenses() {


      const [inEditMode, setInEditMode] = useState({
      status: false,
      rowKey: null
  });

  const [ incomeSourceAmount, setIncomeSourceAmount] = useState(null);

  const onEdit = ({id, incomeSourceAmount}) => {
      setInEditMode({
          status: true,
          rowKey: id
      })
      setIncomeSourceAmount(incomeSourceAmount);
}

//fetch go here?

const onSave = ({id, newIncomeSourceAmount}) => {
  updateInventory({id, newIncomeSourceAmount});
}

const onCancel = () => {
  // reset the inEditMode state value
  setInEditMode({
      status: false,
      rowKey: null
  })
  // reset the unit price state value
  setIncomeSourceAmount(null);
}
  
  return (
    <>
        <h3>Monthly Income</h3>
      <div>
        <table>
            <thead>
            <tr>
              <th>Income Source</th>
              <th>Amount</th>
            </tr> 
            </thead>
          <tbody>
          {
              data.map((user) => (
                <tr key={user.id}>
                  <td>{user.income_source}</td>
                  <td>
                      {
                          inEditMode.status && inEditMode.rowKey === user.id ? (
                              <input value={incomeSourceAmount}
                                 onChange={(event) => setIncomeSourceAmount(event.target.value)}
                              />
                          ) : (  
                              user.income_source_amount
                          )
                      }
                  </td>
                  <td>
                     {
                        inEditMode.status && inEditMode.rowKey === item.id ? (
                          <>
                              <button                     
                                className={"btn btn-success"}
                                onClick={() => onSave({id: item.id, newUnitPrice: unitPrice})}
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
                                onClick={() => onEdit({id: item.id, currentUnitPrice: item.unit_price})}
                              >Edit</button>
                                    )
                      }
                  </td>
                </tr>
              ))
          }
          </tbody>
         </table>
      </div>
      <div>
          <h3>Monthly Expense (fill in amounts to add your total expenses)</h3>
          <Table>
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
         <hr/>
        <input type='text' />
        <button className='btn btn-primary'>add expenses</button>
        </div>
      </>

    );
  }


    export default IncomeExpenses;
    