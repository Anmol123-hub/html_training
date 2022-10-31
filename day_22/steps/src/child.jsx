import { useContext } from "react"
import FamilyContext from "./context/family.context"

let ChildC = ()=>{
    let grandGift = useContext(FamilyContext)
    return <div style={{border:"2px solid black",padding:"20px",margin:"20px"}}>
        <h1>Child Component</h1>
        {/* <FamilyContext.Consumer>{(val)=><h2>Gift Received {val}</h2>}</FamilyContext.Consumer> */}
        <h2>{grandGift}</h2>
        <h2>{grandGift}</h2>
        <h2>{grandGift}</h2>
    </div>
}
export default ChildC