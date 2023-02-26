import "./expences.css";
import CalenderDate from "./calender";
const Itemrow = props => {
  const {date,title,price} = props;
  return (
    <div className="row">
      <CalenderDate date = {date}/>
      <div className="name">{title}</div>
      <div className="price">$ {price}</div>
    </div>
  );
}

export default Itemrow;
