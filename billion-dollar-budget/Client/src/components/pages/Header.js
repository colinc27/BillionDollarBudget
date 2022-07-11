import React from 'react'
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  return (
    <header class="fixed-top bg-success bg-gradient text-center text-white py-1">
      <div class= "flex-row">
      <h1 class="">
      B$B
      </h1>
      <Menu>
        <div>
          <h5>Please enter your budget variables here</h5>
          <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Monthly Budget</h6>
             <input class="form-control form-control-sm " id="budget" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Gas</h6>
             <input class="form-control form-control-sm" id="gas" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Rent</h6>
             <input class="form-control form-control-sm" id="rent" type="text" placeholder="$300"></input>
             </div>
             <div class="d-flex flex-row my-2">         
          <h6 class="px-2">Expected Food</h6>
             <input class="form-control form-control-sm" id="food" type="text" placeholder="$300"></input>
             </div>    
             <button type="button" id="save" class="btn btn-success">Save</button>
             <button type="button" id="clear" class="btn btn-danger">Save</button>
        </div>
    </Menu>
    </div>
    </header>

  )
}

export default Header
