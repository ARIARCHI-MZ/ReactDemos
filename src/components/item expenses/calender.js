import "./expences.css";

function CalenderDate(props) {
  const day = props.date.toLocaleString("en-US", { month: "long" });
  const month = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
export default CalenderDate;
