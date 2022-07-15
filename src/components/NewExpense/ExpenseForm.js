import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    //two ways of useState: uncommented is most common: 
    //we assign it separately for individual form, the second: 
    //we create an object of properties and use spread operator 
    //calling it so the data won't get lost
    //the problem is that React is calling it instantly, so some data might
    //get ost, that's why we  eventually call an anonymous function that will return prevstate
    //and update the form => definitely to complicated, we won't do that this way


 const [enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount] = useState("");
const [enteredDate, setEnteredDate] = useState("");
 // const [userInput, setUserInput]= useState({
   // enteredTitle: "",
    //enteredAmount: "",
    //entereddate: ""
  //})

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
    //setUserInput((prevState) => {
      //  return {
        //...prevState,
        //enteredTitle: event.target.value,
        //}
  //})
  //};

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
    //setUserInput((prevState) => {
      //  return {
        //...prevState,
        //enteredAmount: event.target.value,
        //}
  //})
  //};

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
    //setUserInput((prevState) => {
      //  return {
        //...prevState,
        //entereddate: event.target.value,
        //}
    //})
  //};

  const submitHandler = (event) => {
event.preventDefault();

//if we use one usestate approach, we do have an object, but when we use three separate
//use state=> we need to create one for the form data
const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate)
}

props.onSaveExpenseData(expenseData);

//we use two way binding setting the initial value of forms after submitting9in the form we use props)
//we call this setEnteredSth function and establish enteredsth value to an empty string


setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');


}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value = {enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value = {enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value = {enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
