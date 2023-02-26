import React from "react";
import "./style.css";
function BirthdayGreeting(props) {
  const { name, lname, date, month } = props;
  return (
    <div className="birthdayBG">
      <p className="birthdayDear">Dear {lname}</p>
      <div className="birthdayFirstP">
        Today is the day you were brought into this world to be a blessing and
        inspiration to the people around you! You are a wonderful person!{" "}
      </div>
      <div className="birthdaySecondP">
        A wish for you on your birthday,<br/>
        whatever you ask may you receive,<br/>
        whatever you seek may you find,<br/>
         whatever you wish may it be fulfilled on
        your birthday and always. 
      </div>
      <div className="birthdayYours">
        Yours,<br/>
        {name} <br/>
        {date} / {month}
      </div>
       
    </div>
  );
}

export default BirthdayGreeting;

//       {props.date ? `Cart sent on ${props.date}${props.month ? `/${props.month}` : ''}` : ''}
//     </div>
//   )
// }

// export default TextOfGreetin
