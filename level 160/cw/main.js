// ვისწავლო reacts.app
import { useState } from "react"

function Num(){
     const [Num, setNum] = useState(0)

     function handleclick(){
          setNum(Num + 1)
     }

     function handleclick2(){
          setNum(Num - 1)
     }
     function handleclick3(){
          let Tf = Math.floor(Math.random() * 10) + 1
          setNum(Num + Tf)
     }
     function handleclick4(){
          setNum(Num - 10000)
     }

     return (
          <div>
               <h1>{Num}</h1>
               <button onClick={handleclick}>+1</button>
               <button onClick={handleclick2}>-1</button>
               <button onClick={handleclick3}>random + 1 to 10</button>
               <button onClick={handleclick4}>do it on your risk</button>
          </div>
     )
}

export default Num