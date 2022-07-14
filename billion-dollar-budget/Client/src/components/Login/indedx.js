import React from "react";
import { useForm } from "react-hook-form";

const login = () => {
    const { register, handleSubmit, errors } = useFrom();

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input 
                type="text"
                name="username"
                placeholder="Username"
                ref={register ({ required: "Enter your Username" })}
                />
                 {errors.username && <p className="error">{errors.username.message}</p>}

                <input
                type="password"
                id="Loginpass"
                placeholder="Password"
                ref={register ({ required: "Enter your Password" })}
                />
                 {errors.password && <p className="error">{errors.password.message}</p>}

                 <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default login;