import "./expences.css";
import React, { useState } from "react";

const Form = (props) => {
    const [enteredTitleForm, setTitleForm] = useState(props.title);
    const [enteredDateForm, setDateForm] = useState(props.date);
    const [enteredPriceForm, setPriceForm] = useState(props.price);
  // const [userInput, setUserInput] = useState({
  //   enteredTitleForm: "",
  //   enteredDateForm: "",
  //   enteredPriceForm: "",
  // })
  const TitleChangeHandler = (event) => {
    setTitleForm(event.target.value);
    // setUserInput ({
    //   ...userInput,
    //   enteredTitleForm: event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,enteredTitleForm: event.target.value,
    //   }
    // })
  };
  const DateChangeHandler = (event) => {
    setDateForm(event.target.value);
  };
  const PriceChangeHandler = (event) => {
    setPriceForm(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      title: enteredTitleForm,
      date: new Date(enteredDateForm),
      price: enteredPriceForm,
    };
    props.onAddItem(userInput );
    setTitleForm("");
    setDateForm("");
    setPriceForm("");
  };
  return (
    <div>
      <h2>number </h2>
      <form onSubmit={submitHandler} className="form">
        <div>
          <label> Title : </label>
          <input type="text" value={enteredTitleForm} onChange={TitleChangeHandler}></input>
        </div>
        <div>
          <label> Price : </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPriceForm}
            onChange={PriceChangeHandler}
          ></input>
        </div>
        <div>
          <label> Date : </label>
          <input
            type="date"
            min="1980-01-01"
            max="2023-12-31"
            value={enteredDateForm}
            onChange={DateChangeHandler}
          ></input>
        </div>
        <div>
          <button type="submit">Add new car</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
