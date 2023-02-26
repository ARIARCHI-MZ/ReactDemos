import React,{useState} from 'react';
import MouseMove from './MouseMove';

function ToggleBtn() {
    const [state, setState] = useState(false)
  return (
    <div>
      <button onClick={()=>setState (!state)}> Toggle clean</button>
      {state && <MouseMove/>}
    </div>
  )
}

export default ToggleBtn
