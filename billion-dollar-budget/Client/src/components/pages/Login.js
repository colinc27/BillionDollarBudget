import React from "react";

const login = () =>{
    reutrn (
        <div className="form">
            <form>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" />
                </div>
                <div className="button-container">
                    <button className="loginbtn">Submit</button>
                </div>
            </form>
        </div>
    );
}