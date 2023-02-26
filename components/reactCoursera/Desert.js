
import React,{useState} from "react";
import DessertsList from "./DessertsList";

function Desert() {
  const [uName, setUName] = useState("");
  const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={uName} onChange={e => setUName(e.target.value)} />
      <button disabled={!uName}>submit</button>
    </div>
  );
}

export default Desert;


//   return (
//     <div className="App">
//       <h2>List of low calorie desserts:</h2>
//       <div> this is{desserts.name}</div>
//       {/* <DessertsList data={desserts} /> */}
//     </div>
//   );
// }

// export default Desert;
