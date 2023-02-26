import React,{useState,useEffect} from 'react'

function MouseMove() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const posionHandler = e =>{
        setX (e.clientX)
        setY (e.clientY)
    }
    useEffect(() => {
        console.log("use effect call")
        window.addEventListener("mousemove", posionHandler)
        return () => {
            console.log("use finished")
            window.removeEventListener("mousemove", posionHandler)
        }
    },[])
  return (
    <div>
      position of x is {x} and position of y is {y} 
    </div>
  )
}

export default MouseMove

