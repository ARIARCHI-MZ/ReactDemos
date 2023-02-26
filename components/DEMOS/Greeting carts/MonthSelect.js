import React, { useState } from "react";
import "./mainStyle.css";

function MonthSelect(props) {
const [selectedMonth, setSelectedMonth] = useState("")

const handleSelectMonth = (e) => {
  const month = e.target.value;
  setSelectedMonth(month);
  props.onSelectMonth(month);
};


  return (
    <div>
      <label htmlFor="month" className="label">
        {" "}
        Select the month.{" "}
      </label>
      <select id="month" name="month" value={selectedMonth} onChange={handleSelectMonth}>
        <option>Select</option>
        <option value="January" key="January">
          January
        </option>
        <option value="February" key="February">
          February
        </option>
        <option value="March" key="March">
          March
        </option>
        <option value="April" key="April">
          April
        </option>
        <option value="May" key="May">
          May
        </option>
        <option value="June" key="June">
          June
        </option>
        <option value="July" key="July">
          July
        </option>
        <option value="August" key="August">
          August
        </option>
        <option value="September" key="September">
          September
        </option>
        <option value="October" key="October">
          October
        </option>
        <option value="November" key="November">
          November
        </option>
        <option value="December" key="December">
          December
        </option>
      </select>
    </div>
  );
}

export default MonthSelect;

// function MonthSelect(props) {
//   const handleSelectMonth = (e) => {
//     const month = e.target.value;
//     setSelectedMonth(month);
//     props.onSelectMonth(month);
//   };

//   return (
//     <div>
//       <label htmlFor="month" className="label">
//         {" "}
//         Select the month.{" "}
//       </label>
//       <select
//         id="month"
//         name="month"
//         value={selectedMonth}
//         onChange={handleSelectMonth}
//       >
//         <option>Select</option>
//         <option value="January" key="January">
//           January
//         </option>
//         <option value="February" key="February">
//           February
//         </option>
//       </select>
//     </div>
//   );
// }

// export default MonthSelect;

