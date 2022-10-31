
import { useState } from "react";
import FamilyContext from "./context/family.context";
import Parent from "./parent";

 
export let GrandParent = ()=> {
    
    let [gift,updateGift] = useState(0)
    return <div style={{border:"2px solid black"}}>
        <h1>Grand Parent</h1>
        <button onClick={()=>updateGift(Math.round(Math.random()*1000))}>Gift to child</button>
            <FamilyContext.Provider value={gift}>
                <Parent/>
            </FamilyContext.Provider>
                
            </div>
}
export default GrandParent