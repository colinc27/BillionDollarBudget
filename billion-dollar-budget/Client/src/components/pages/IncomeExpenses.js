import React, { useState, } from 'react'
import Table from 'react-bootstrap/Table'
import '../styles/Home.css'
import 'react-bootstrap'
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';



function IncomeExpenses() {
  //     const [data, setData] = useState([]);

  //     const [inEditMode, setInEditMode] = useState({
  //     status: false,
  //     rowKey: null
  // });

  const [ paycheckAmount, setPaycheckAmount] = useState(null);
  const [ rentAmount, setRentAmount ] = useState(null);
  const [ utilitiesAmount, setUtilitiesAmount ] = useState(null);
  const [ reoccurringBills, setreoccurringBills] = useState(null);
  const [ gasAmount, setGasAmount ] = useState(null);
  const [ foodAmount, setFoodAmount ] = useState(null);

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
                <th className="main-text">Item</th>
                <th className="main-text">Amount</th>
             </tr>
            </thead>
            <tbody>
              <tr>
                <td className="main-text">Paycheck</td>
                <td>
                  <input value={paycheckAmount}
                                 onChange={(event) => setPaycheckAmount(event.target.value)} type='text' />
                </td>
              </tr>
             <tr>
                <td className="main-text">Rent</td>
                <td>
                  <input value={rentAmount}
                                 onChange={(event) => setRentAmount(event.target.value)} type='text' />
                </td>
              </tr>
              <tr>
                <td className="main-text">Utilities</td>
                <td>
                  <input value={utilitiesAmount}
                                 onChange={(event) => setUtilitiesAmount(event.target.value)} type='text' />
                </td>
              </tr>
              <tr>
                <td className="main-text">Reoccurring Bills</td>
                <td>
                  <input value={reoccurringBills}
                                 onChange={(event) => setreoccurringBills(event.target.value)} type='text' />
                </td>
              </tr>
              <tr>
                <td className="main-text">Gas</td>
                <td>
                  <input value={gasAmount}
                                 onChange={(event) => setGasAmount(event.target.value)} type='text' />
                </td>
              </tr>
              <tr>
                <td className="main-text">Food</td>
                <td>
                  <input value={foodAmount}
                                 onChange={(event) => setFoodAmount(event.target.value)}type='text' />
                </td>
              </tr>
              <tr>
              <button className='btn btn-primary'> (Paycheck - Expenses) = </button>
        {/* add onClick as attribute  */}
              </tr>
            </tbody>
         </Table>
         <br/>
         <button className='btn btn-primary'> (Paycheck - Expenses) = </button>
        {/* add onClick as attribute  */}
          
        </div>
      </>

    );
  }


    export default IncomeExpenses;
    
