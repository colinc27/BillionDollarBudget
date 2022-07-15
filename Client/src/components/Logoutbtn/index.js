import React from "react";
import Auth from '../../utils/auth'

const Logout = () => {
    const logout = event =>{
        event.preventDefault()
        Auth.logout()
    }
    return(
        <div className="">
            <button className="btn btn-danger fw-bold my-4 w-50" href="/" onClick={logout}>Logout</button>
        </div>
    )
} 

export default Logout