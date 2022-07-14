import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import '../../styles/Home.css'
import 'react-bootstrap'
import { ModifyBudget } from './ModifyBudget';

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';



function IncomeExpenses() {

  const [ paycheckAmount, setPaycheckAmount] = useState(0);
  const [ rentAmount, setRentAmount ] = useState(0);
  const [ utilitiesAmount, setUtilitiesAmount ] = useState(0);
  const [ reoccurringBills, setreoccurringBills] = useState(0);
  const [ gasAmount, setGasAmount ] = useState(0);
  const [ foodAmount, setFoodAmount ] = useState(0);
  // const [ currentBudget, setCurrentBudget ] = useEffect('')



//fetch go here?
// const updatePaycheck = ({id, newPaycheckAmount}) => {
//     console.log("paycheck updated")
// }


  return (
    <>
      <div>
          <h2>Monthly Expenses Vs. Paycheck</h2>
          <Table striped bordered hover variant="dark">
           <thead>
              <tr>
                <th><h3>Item</h3></th>
                <th><h3>Amount</h3></th>
             </tr>
            </thead>
            <tbody>
              <tr>
                <td className="main-text">Paycheck</td>
                <td>
                  <input 
                    value={paycheckAmount}
                    onChange={(event) => setPaycheckAmount(event.target.value)} 
                    type='text' 
                    id='paycheck'
                    placeholder='Enter monthly income here.'
                  />
                </td>
              </tr>
             <tr>
                <td className="main-text">Rent</td>
                <td>
                  <input 
                    value={rentAmount}
                    onChange={(event) => setRentAmount(event.target.value)} 
                    type='text' 
                    id='rent'
                  />
                </td>
              </tr>
              <tr>
                <td className="main-text">Utilities</td>
                <td>
                  <input 
                    value={utilitiesAmount}
                    onChange={(event) => setUtilitiesAmount(event.target.value)} 
                    type='text' 
                  />
                </td>
              </tr>
              <tr>
                <td className="main-text">Reoccurring Bills</td>
                <td>
                  <input 
                    value={reoccurringBills}
                    onChange={(event) => setreoccurringBills(event.target.value)} 
                    type='text' 
                  />
                </td>
              </tr>
              <tr>
                <td className="main-text">Gas</td>
                <td>
                  <input 
                    value={gasAmount}
                    onChange={(event) => setGasAmount(event.target.value)} 
                    type='text' 
                  />
                </td>
              </tr>
              <tr>
                <td className="main-text">Food</td>
                <td>
                  <input  
                    value={foodAmount}
                    onChange={(event) => setFoodAmount(event.target.value)}
                    type='text' 
                  />
                </td>
              </tr>
              <tr>
              </tr>
            </tbody>
         </Table>
         <br/>
         <button onClick={ModifyBudget} className='btn btn-secondary'> (Paycheck - Expenses) = </button>
          
        </div>
      </>

    );
  }


    export default IncomeExpenses;