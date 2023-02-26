import React from 'react';

function ComB({clickHandler,children }) {
  console.log("rendering ", {children});
  return (
    <div>
      <button onClick={clickHandler}>{children}</button>
    </div>
  )
}

export default React.memo(ComB)
