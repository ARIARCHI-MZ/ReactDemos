import React from "react";
import BirthdayGreeting from "./BirthdayGreeting";
import InvitaionCart from "./InvitaionCart";
import NewYearGreeting from "./NewYearGreeting";

function ControlSwitch(props) {
  const { value, ...rest } = props;
  switch (value) {
    case "Brithday":
      return <BirthdayGreeting {...rest} />;
    case "Newyear":
      return <NewYearGreeting {...rest} />;
    case "Invitation":
      return <InvitaionCart {...rest} />;
    default:
      return null;
  }
}

export default ControlSwitch;
