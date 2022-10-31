// import { useState } from "react"

// let UsedStateComp = ()=>{
//     let [hero,setHero] = useState([])
//     // let increasePower = ()=>setPower(power+1)
//     var a1=""
//     let ag=(evt)=>{
//     a1 = evt.target.value
//         }
//     let addHero=()=>{
//         setHero([a1].concat(hero))
//         console.log(a1)
//     }
//     return <div>
//         <h1>Use State Assignment</h1>
      
//         <label id="avenger">Add Avenger<input type="text" title="firstname" id="avenger" onChange={(evt)=>ag(evt)}/></label>
//         <br/>
//         <button onClick={addHero}>Add</button>
//         <ol>
//             {
                
//                     hero.map((val, idx)=>{
//                         return <li key={idx}>{ val }</li>
//                     })
                
//             }
//         </ol>
//     </div>
// }
// export default UsedStateComp

import { useRef } from "react";
import { useState } from "react"
 
let UseStateAssignmentComp = ()=>{
    let [heroes, setHeroes] = useState([]);
    let elm = useRef(null);
    let addHero = ()=>{
        setHeroes([...heroes, elm.current.value ])  ;
        elm.current.value = "";
    }
    return <div>
                <h1>Use State Assignment Component</h1>
                <label htmlFor="fname"> Avenger Name : 
                <input ref={elm} type="text" /> 
                </label>
                <button onClick={ addHero }>Add Hero</button>
                <hr />
                <ol>
                    {
                        heroes.map((val, idx)=>{
                            return <li key={idx}>{ val }</li>
                        })
                    }
                </ol>
            </div>
}
export default UseStateAssignmentComp;