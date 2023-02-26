import "./expences.css";
import Itemrow from "./item row";
import From from "./CustomForm";
// import React,{useState} from "react";
// import NewItem from "./NewItem";


function HeaderT() {
  const items = [
    { date: new Date(2021, 3, 21), title: "fiat", price: 232 },
    { date: new Date(2022, 6, 21), title: "benz", price: 262 },
    { date: new Date(2022, 7, 1), title: "mazda", price: 272 },
  ];
  // const addNewItemHandler = expense =>{
  //   console.log(expense);
  //   console.log("in app");
  // };
  return (
    <div className="container">
      <h2> this is the title of expenses</h2>
      <From  />
      {/* <NewItem onAddNew ={addNewItemHandler}/> */}
      {items.map((expense) => (
        <Itemrow
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </div>
  );
}

export default HeaderT;


