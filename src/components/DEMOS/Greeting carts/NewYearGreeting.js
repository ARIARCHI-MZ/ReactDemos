
import "./newYear.css";


function NewYearGreeting(props) {

  
  const { name, lname, date, month, ...rest } = props;
  return (
    <div>
      <div className="newYearBG" >
        <div className="newYearDear">Dear {lname}</div>
        <div className="newYearFirstP">
          Wishing every day of the new year to be filled with success,
          happiness, and prosperity for you.
        </div>
        <div className="newYearYours">
          Yours,
          <br />
          {name} <br />
          {date} / {month}
        </div>
      </div>
    </div>
  );
}

export default NewYearGreeting;



