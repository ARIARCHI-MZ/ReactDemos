import React from 'react'

function child(props) {
  return (
    <div>
      <button onClick={() =>props.messageClick(" child")}>click</button>
    </div>
  )
}

export default child
