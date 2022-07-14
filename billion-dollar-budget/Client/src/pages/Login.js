import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import '../App.css'

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="mx-auto">
      <div className="col-sm-12 col-md-8 login justify-content-center mx-auto">
        <div className="card border border-success border-5 rounded m-5 p-5" id="card">
          <h4 className="card-header border border-success bg-success rounded border-5 text-white text-center">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className='justify-content-center text-center py-2 form-group'>
                <h3 className='px-2 fw-bold'>Email</h3>             
                <input
                className="form-input border border-success border-5 rounded"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              /></div>
              <div className='justify-content-center text-center py-1' >
              <h3 className='px-2 text-center fw-bold'>Password</h3>  
              <input
                className="form-input input-large border border-success border-5 rounded"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <div className=''>
              <button className="btn btn-secondary submit px-3 my-3" type="submit">
                Submit
              </button>
              </div>
              {error && <h5 className='bg-danger border border-danger rounded text-center my-1'>Login failed</h5>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
