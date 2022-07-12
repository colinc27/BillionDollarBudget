import React from 'react'
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    
        console.log(data.get('monthlyIncome')); // reference by form input's `name` tag
        console.log(data.get('expectedGas'));
        fetch('/api/expected', {
          method: 'POST',
          body: data,
        });
      }
    
render(){
  return (
      <Menu>
        <div>
          <h5>Please enter your budget variables here</h5>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='monthlyIncome'>Enter Monthly Income</label>
            <input type="text" name="monthlyIncome" id='monthlyIncome'/>
            <label htmlFor='expectedGas'>Enter Expected Gas</label>
            <input type="text" name="expectedGas" id='expectedGas'/>
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

export default Sidebar
