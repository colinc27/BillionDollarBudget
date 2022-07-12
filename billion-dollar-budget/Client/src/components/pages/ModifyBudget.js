import React, { useState } from 'react'

export const ModifyBudget = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  
    return (
        <>
        <h3>Modify Balance</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">I'm a Form, this text will be replaced with somthing dynamic maybe?</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} pladeholder="Enter text..." />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'
                >Amount<br />
                    (negative - expense, positive - income)</label
                >
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder='Enter Amount...' />
            </div>
            <button className='btn'>Add Budget Modifications</button>
        </form>
    </>
  )
};

