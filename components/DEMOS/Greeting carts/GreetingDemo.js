import React, { useState } from "react";
import NameForm from "./NameForm";
import ControlSwitch from "./ControlSwitch";
import GreetingSelect from "./GreetingSelect";
import "./mainStyle.css"

function GreetingDemo() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");
  // const [month, setMonth] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [value, setValue] = useState("");
  const handleOnSelect = (value) => {
    setValue(value);
  };
  const hadleChangeName = (name) => {
    setName(name);
  };
  const hadleChangeLName = (lname) => {
    setLname(lname);
  };
  const handleChangeDate = (date) => {
    setDate(date);
  };
  const handleChangeMonth = (selectedMonth) => {
    setSelectedMonth(selectedMonth);
  };
  return (
    <div className="containerGift">
      <div className="infoDescription">
        {" "}
        Using React-app , formik, and material UI library, this gift card was
        created. The width and height of the images are defined with fixed
        dimensions to achieve the best results. For this reason, it is highly
        recommended to open this page on a desktop or tablet .
      </div>
      <GreetingSelect onSelect={handleOnSelect} />
      
      <NameForm
        onNameChange={hadleChangeName}
        onLnameChange={hadleChangeLName}
        onDateChange={handleChangeDate}
        onMonthChange={handleChangeMonth}
      />
      <ControlSwitch
        value={value}
        name={name}
        lname={lname}
        date={date}
        month={selectedMonth}
      />
    </div>
  );
}

export default GreetingDemo;



