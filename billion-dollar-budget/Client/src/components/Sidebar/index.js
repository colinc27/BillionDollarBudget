import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';
// import { ADD_BUDGET } from './utils/mutations';
// import { useMutation } from '@apollo/client';
// import { QUERY_BUDGET} from './utils/queries'



const Sidebar = () =>{
    
    const [monthlyIncome, setIncome] = useState(0);
    const [expectedRent, setRent] = useState(0);
    const [expectedUtilities, setUtilities] = useState(0);
    const [expectedMisc, setMisc] = useState(0);
    const [expectedFood, setFood] = useState(0);
    const [expectedGas, setGas] = useState(0);

    // const [updateBudget, { error }] = useMutation(ADD_BUDGET, {
    //     update(cache, { data: { expectedData } }) {
    //     try {
    //       const { expected } = cache.readQuery({ query: QUERY_BUDGET });
    //       cache.writeQuery({
    //         query: QUERY_BUDGET,
    //         data: { expected: { ...expected, expectedData: [...expected.expectedData, expectedData] } },
    //       });
    //     } catch (e) {
    //       console.warn("First thought insertion by user!")
    //     }
    //   }
    // })

  const handleChangeExpectedIncome = (event) => {
      setIncome(event.target.value);
}
const handleChangeExpectedRent = (event) => {
    setRent(event.target.value);
}
const handleChangeExpectedUtilities = (event) => {
    setUtilities(event.target.value);
}
const handleChangeExpectedMisc = (event) => {
    setMisc(event.target.value);
}
const handleChangeExpectedFood = (event) => {
    setFood(event.target.value);
}
const handleChangeExpectedGas = (event) => {
    setGas(event.target.value);
}
  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const expectedData = [monthlyIncome,expectedFood,expectedGas,expectedMisc,expectedRent,expectedUtilities]
    console.log(expectedData)
    
  };

return (
    <Menu>
      <div>
        <h5>Please enter your budget variables here</h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor='monthlyIncome'>Monthly Income</label>
          <input type="number" name="monthlyIncome" id='monthlyIncome' value={monthlyIncome} onChange={handleChangeExpectedIncome}/>
          <label htmlFor='expectedRent'>Expected Rent</label>
          <input type="number" name="expectedRent" id='expectedRent' value={expectedRent} onChange={handleChangeExpectedRent}/>
          <label htmlFor='expectedUtilities'>Expected Utilities</label>
          <input type="number" name="expectedUtilities" id='expectedUtilities' value={expectedUtilities} onChange={handleChangeExpectedUtilities}/>
          <label htmlFor='expectedMisc'>Expected Misc. Expenses</label>
          <input type="number" name="expectedMisc" id='expectedMisc' value={expectedMisc} onChange={handleChangeExpectedMisc}/>
          <label htmlFor='expectedFood'>Expected Food</label>
          <input type="number" name="expectedFood" id='expectedFood' value={expectedFood} onChange={handleChangeExpectedFood}/>
          <label htmlFor='expectedGas'>Expected Gas</label>
          <input type="number" name="expectedGas" id='expectedGas' value={expectedGas} onChange={handleChangeExpectedGas}/>
          <button type="submit" id="save" class="btn btn-success mx-2">Save</button>
        </form>
        {/* <div class="d-flex flex-row my-2">         
        <h6 class="px-2">Monthly Income</h6>
           <input class="form-control form-control-sm " id="budget" type="text" placeholder="$300"></input>
           </div> */}
      </div>
  </Menu>
)}
export default Sidebar;
          // submit form