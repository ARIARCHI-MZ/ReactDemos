import React from "react";

function Propsexe() {
  const people = ["maryam", "zahra", "ali", "jafar"];
  const peopleList = people.map((person, index) => (
    <div key={index}>
      {index} {person}
    </div>
  ));
  return <div> {peopleList}</div>;
}

export default Propsexe;
