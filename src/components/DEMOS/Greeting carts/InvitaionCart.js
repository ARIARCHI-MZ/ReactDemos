import React from 'react'
import "./invitation.css";
function InvitaionCart (props) {
 const {name, lname, date, month , ...rest}= props
  return (
    <div className="invitationBG">
      <div className="invitationDear">My lovely friend,</div>
      <div className="invitationFirstP">
      Any party is incomplete without my lovely friends. 
      Dear {lname} I invite you to the party I am throwing for a celebration. 
      Please take it as a formal invitation. The party will take place in my home 
      on {date} of {month} . I am looking forward to meet you.
      </div>
      <div className="invitationYours">
        Yours,
        <br />
        {name} 
      </div>
    </div>
  )
}

export default InvitaionCart


//       {props.date ? `Cart sent on ${props.date}${props.month ? `/${props.month}` : ''}` : ''}
//     </div>
//   )
// }

// export default TextOfGreetin
