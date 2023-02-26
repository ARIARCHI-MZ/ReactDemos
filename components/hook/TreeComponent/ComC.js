import React from 'react'


function ComC({text,count }) {
  console.log("rendering ", {text});
  return (
    <div>
       {text} / {count}
    </div>
  )
}

export default React.memo(ComC)
