import React from 'react'
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            monthlyIncome: 0,
            expectedRent: 0,
            expectedUtilities: 0,
            expectedMisc: 0,
            expectedFood: 0,
            expectedGas: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
      }

      handleSubmit(event) {
        event.preventDefault();
        const {monthlyIncome, expectedRent, expectedUtilities, expectedMisc, expectedFood, expectedGas} =this.state
        console.log((monthlyIncome)); // reference by form input's `name` tag
        console.log((expectedRent));
        console.log((expectedUtilities));
        console.log((expectedMisc));
        console.log((expectedFood));
        console.log((expectedGas));

        // fetch('/api/expected', {
        //   method: 'POST',
        //   body: data,
        // });
      }
    
render(){
  return (
      <Menu>
        <div>
          <h5>Please enter your budget variables here</h5>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='monthlyIncome'>Monthly Income</label>
            <input type="number" name="monthlyIncome" id='monthlyIncome' defaultValue={this.state.monthlyIncome} onChange={this.handleChange}/>
            <label htmlFor='expectedRent'>Expected Rent</label>
            <input type="number" name="expectedRent" id='expectedRent' defaultValue={this.state.expectedRent} onChange={this.handleChange}/>
            <label htmlFor='expectedUtilities'>Expected Utilities</label>
            <input type="number" name="expectedUtilities" id='expectedUtilities' defaultValue={this.state.expectedUtilities} onChange={this.handleChange}/>
            <label htmlFor='expectedMisc'>Expected Misc. Expenses</label>
            <input type="number" name="expectedMisc" id='expectedMisc' defaultValue={this.state.expectedRent} onChange={this.handleChange}/>
            <label htmlFor='expectedFood'>Expected Food</label>
            <input type="number" name="expectedFood" id='expectedFood' defaultValue={this.state.expectedFood} onChange={this.handleChange}/>
            <label htmlFor='expectedGas'>Expected Gas</label>
            <input type="number" name="expectedGas" id='expectedGas' defaultValue={this.state.expectedGas} onChange={this.handleChange}/>
            <button type="submit" id="save" class="btn btn-success mx-2">Save</button>
          </form>
          {/* <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Monthly Income</h6>
             <input class="form-control form-control-sm " id="budget" type="text" placeholder="$300"></input>
             </div> */}
             {/* <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Gas</h6>
             <input class="form-control form-control-sm" id="gas" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Rent</h6>
             <input class="form-control form-control-sm" id="rent" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Utilities</h6>
             <input class="form-control form-control-sm" id="rent" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Food</h6>
             <input class="form-control form-control-sm" id="rent" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">    
             <h6 class="px-2">Expected Reoccurring Bills</h6>
             <input class="form-control form-control-sm" id="rent" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">       
          <h6 class="px-2">Expected Misc.</h6>
             <input class="form-control form-control-sm" id="food" type="text" placeholder="$300"></input>
             </div>     */}
             {/* <button type="button" id="clear" class="btn btn-danger mx-2">Clear</button> */}
        </div>
    </Menu>
  )
}
}
export default Sidebar;
