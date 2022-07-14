import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="mx-auto">
      <div className="col-sm-12 col-md-8 signup justify-content-center mx-auto">
        <div className="card border border-success border-5 rounded m-5 p-5">
          <h4 className="card-header border border-success bg-success rounded border-5 text-white text-center">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className='justify-content-center text-center py-1'> 
              <h3 className='px-2 fw-bold'>Username</h3>               
                <input
                className="form-input border border-success border-5 rounded"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              </div>
              <div className='justify-content-center text-center py-1 form-group'>
                <h3 className='px-2 fw-bold'>Email</h3>
              <input
                className="form-input border border-success border-5 rounded"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              </div>
              <div className='justify-content-center text-center' >
              <h3 className='px-2 text-center fw-bold'>Password</h3>  
              <input
                className="form-input border border-success border-5 rounded"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <div className='py-2'>
              <button className="btn btn-secondary py-1" type="submit">
                Submit
              </button>
              </div>
              {error && <h5 className='bg-danger border border-danger rounded text-center my-1'>Sign-up failed</h5>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
