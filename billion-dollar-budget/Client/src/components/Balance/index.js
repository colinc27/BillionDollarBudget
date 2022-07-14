import React from 'react';

class Balance extends React.Component{
        
  state = {
    name: "",
   }

handleCallback = (data) =>{
    this.setState({name: data})
}

render(){
    const {data} = this.state;
    return(
        <h1>Total Balance: $1,000,000.00
            {data}
        </h1>
    )
}
};

export default Balance;