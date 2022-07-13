import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';



const Sidebar = () =>{
    const [monthlyIncome, setIncome] = useState(0);
    const [expectedRent, setRent] = useState(0);
    const [expectedUtilities, setUtilities] = useState(0);
    const [expectedMisc, setMisc] = useState(0);
    const [expectedFood, setFood] = useState(0);
    const [expectedGas, setGas] = useState(0);

      // update state based on form input changes
  const handleChangeIncome = (event) => {
      setIncome(event.target.value);
}
const handleChangeRent = (event) => {
    setRent(event.target.value);
}
const handleChangeUtilities = (event) => {
    setUtilities(event.target.value);
}
const handleChangeMisc = (event) => {
    setMisc(event.target.value);
}
const handleChangeFood = (event) => {
    setFood(event.target.value);
}
const handleChangeGas = (event) => {
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
          <input type="number" name="monthlyIncome" id='monthlyIncome' value={monthlyIncome} onChange={handleChangeIncome}/>
          <label htmlFor='expectedRent'>Expected Rent</label>
          <input type="number" name="expectedRent" id='expectedRent' value={expectedRent} onChange={handleChangeRent}/>
          <label htmlFor='expectedUtilities'>Expected Utilities</label>
          <input type="number" name="expectedUtilities" id='expectedUtilities' value={expectedUtilities} onChange={handleChangeUtilities}/>
          <label htmlFor='expectedMisc'>Expected Misc. Expenses</label>
          <input type="number" name="expectedMisc" id='expectedMisc' value={expectedMisc} onChange={handleChangeMisc}/>
          <label htmlFor='expectedFood'>Expected Food</label>
          <input type="number" name="expectedFood" id='expectedFood' value={expectedFood} onChange={handleChangeFood}/>
          <label htmlFor='expectedGas'>Expected Gas</label>
          <input type="number" name="expectedGas" id='expectedGas' value={expectedGas} onChange={handleChangeGas}/>
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

// class Sidebar extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             monthlyIncome: 0,
//             expectedRent: 0,
//             expectedUtilities: 0,
//             expectedMisc: 0,
//             expectedFood: 0,
//             expectedGas: 0
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//       }
//       handleChange(e) {
//         this.setState({[e.target.name]: e.target.value})
//         console.log(e.target.value)
//       }

//       handleSubmit(event) {
//         event.preventDefault();
//         const {monthlyIncome, expectedRent, expectedUtilities, expectedMisc, expectedFood, expectedGas} =this.state
//         console.log((monthlyIncome)); // reference by form input's `name` tag
//         console.log((expectedRent));
//         console.log((expectedUtilities)); 
//         console.log((expectedMisc));
//         console.log((expectedFood));
//         console.log((expectedGas));
//         const data = [monthlyIncome, expectedRent, expectedUtilities, expectedMisc, expectedFood, expectedGas]
//         console.log(data)
//         // fetch('/api/expected', {
//         //   method: 'POST',
//         //   body: data,
//         // });
//       }
    
// render(){
//   return (
//       <Menu>
//         <div>
//           <h5>Please enter your budget variables here</h5>
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor='monthlyIncome'>Monthly Income</label>
//             <input type="number" name="monthlyIncome" id='monthlyIncome' defaultValue={this.state.monthlyIncome} onChange={this.handleChange}/>
//             <label htmlFor='expectedRent'>Expected Rent</label>
//             <input type="number" name="expectedRent" id='expectedRent' defaultValue={this.state.expectedRent} onChange={this.handleChange}/>
//             <label htmlFor='expectedUtilities'>Expected Utilities</label>
//             <input type="number" name="expectedUtilities" id='expectedUtilities' defaultValue={this.state.expectedUtilities} onChange={this.handleChange}/>
//             <label htmlFor='expectedMisc'>Expected Misc. Expenses</label>
//             <input type="number" name="expectedMisc" id='expectedMisc' defaultValue={this.state.expectedRent} onChange={this.handleChange}/>
//             <label htmlFor='expectedFood'>Expected Food</label>
//             <input type="number" name="expectedFood" id='expectedFood' defaultValue={this.state.expectedFood} onChange={this.handleChange}/>
//             <label htmlFor='expectedGas'>Expected Gas</label>
//             <input type="number" name="expectedGas" id='expectedGas' defaultValue={this.state.expectedGas} onChange={this.handleChange}/>
//             <button type="submit" id="save" class="btn btn-success mx-2">Save</button>
//           </form>
//           {/* <div class="d-flex flex-row my-2">         
//           <h6 class="px-2">Monthly Income</h6>
//              <input class="form-control form-control-sm " id="budget" type="text" placeholder="$300"></input>
//              </div> */}
//         </div>
//     </Menu>
//   )
// }
// }
// export default Sidebar;




