import React from 'react';
import '../../App.css'

const Balance = (props) =>{
    const netProceeds=(props.monthlyIncome-props.rent-props.gas-props.utilities-props.misc-props.food);
    if(netProceeds>0){
        return(
            <h1 className='positive'>Net Savings: ${netProceeds}
            </h1> 
        )
    }else{
       return(
            <h1 className='negative'>Net Savings: ${netProceeds}
            </h1> 
        )}
}
        
export default Balance;