import React from 'react';

function DessertsList( {data} ) {
  return (
    <div>
      {data
        .filter(dessert => dessert.calories < 500)
        .sort ((a,b) => a.calories - b.calories)
        .map(dessert => (
          <div key={dessert.name}>
            {dessert.name} {dessert.calories} calories
          </div>
        ))}
    </div>
  );
}

export default DessertsList;







// import React from 'react'

// function DessertsList(data) {

//     return (
//         <div>
//             {data.map((data) => (
//             <div key={data.name}>{data.name}</div>
//           ))}
//         </div>
        
        
//     ) 

// }

// export default DessertsList
