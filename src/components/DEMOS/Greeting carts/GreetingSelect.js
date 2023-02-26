

import React, { useState } from "react";
import "./mainStyle.css"

function GreetingSelect(props) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.onSelect(event.target.value);
  };
  return (
    <div>
      <label className="label" htmlFor="Greeting">
        {" "}
        Select the kind of greeting card you want .
      </label>
      <select
        name="Greeting"
        id="Greeting"
        onChange={handleChange}
        value={selectedValue}
      >
        <option> select </option>
        <option key="Brithday" value="Brithday">
          {" "}
          Birthday greeting card.
        </option>
        <option key="Newyear" value="Newyear">
          {" "}
          New year greeting card.
        </option>
        <option key="Invitation" value="Invitation">
          {" "}
          Invitation card.
        </option>
      </select>
    </div>
  );
}

export default GreetingSelect;

