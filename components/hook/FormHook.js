import React, { useState, useEffect , useRef } from "react";

function FormHook() {
  const [name, setName] = useState({firstName : ""});
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("the form updated");
  },[count])
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  },[])
  return (
    <div>
      <button onClick={()=>setCount (count+1)}>submit {count}</button>
      <input
        type="text"
        value={name.firstName}
        onChange={(event) =>
          setName({ ...name, firstName: event.target.value })
        }
      />
      <input
        type="text"
        value={name.lastName}
        ref={inputRef}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      /> 
       <h5>
        your first name is {name.firstName} 
        and the last name is {name.lastName}
      </h5>
    </div>
  );
}

export default FormHook;
