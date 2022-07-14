import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';
 import { useParams } from 'react-router-dom';
 import {  useQuery,useMutation } from '@apollo/client';
 import { QUERY_USER, QUERY_ME } from '../utils/queries';
 import { ADD_EXPECTED_LIABILITY} from '../utils/mutations'
 import Auth from '../utils/auth';


const Sidebar = () => {
  const [formState, setFormState] = useState({
    rent: 0,
    food: 0,
    utilities: 0,
    reoccurringBills: 0,
    gas: 0
  });

  const { username: userParam } = useParams();

  const [addExpectedLiability] = useMutation(ADD_EXPECTED_LIABILITY);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

/*
  const [monthlyIncome, setIncome] = useState(0);
  const [expectedRent, setRent] = useState(0);
  const [expectedUtilities, setUtilities] = useState(0);
  const [expectedMisc, setMisc] = useState(0);
  const [expectedFood, setFood] = useState(0);
  const [expectedGas, setGas] = useState(0);


  const handleChangeIncome = (event) => {
      setIncome(event.target.value);
  }
  const handleChangeRent = (event) => {
      setRent(event.target.value);
  }
  const handleChangeUtilities = (event) => {
      setUtilities(event.target.value);
  }
  const handleChangeMisc = (event) => {
      setMisc(event.target.value);
  }
  const handleChangeFood = (event) => {
      setFood(event.target.value);
  }
  const handleChangeGas = (event) => {
      setGas(event.target.value);
  }*/

    // submit form
    const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addExpectedLiability({
        variables: {  ...formState},
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <Menu>
        <div>
          <h5>Please enter your budget variables here</h5>
          <form onSubmit={handleSubmit}>
            <label htmlFor='monthlyIncome'>Monthly Income</label>
            <input type="number" name="salary" id='monthlyIncome' value={formState.salary} onChange={handleChange}/>
            <label htmlFor='expectedRent'>Expected Rent</label>
            <input type="number" name="rent" id='expectedRent' value={formState.rent} onChange={handleChange}/>
            <label htmlFor='expectedUtilities'>Expected Utilities</label>
            <input type="number" name="utilities" id='expectedUtilities' value={formState.utilities} onChange={handleChange}/>
            <label htmlFor='expectedMisc'>Expected Misc. Expenses</label>
            <input type="number" name="reoccurringBills" id='expectedMisc' value={formState.reoccurringBills} onChange={handleChange}/>
            <label htmlFor='expectedFood'>Expected Food</label>
            <input type="number" name="food" id='expectedFood' value={formState.food} onChange={handleChange}/>
            <label htmlFor='expectedGas'>Expected Gas</label>
            <input type="number" name="gas" id='expectedGas' value={formState.gas} onChange={handleChange}/>
            <button type="submit" id="save" class="btn btn-success mx-2">Save</button>
          </form>
        </div>
    </Menu>
)}
  
export default Sidebar;