import ChildC from "./child"

let Parent = ()=>{
    return <div style={{border:"2px solid black",padding:"20px",margin:"20px"}}>

        <h1>Parent Component</h1>
        <ChildC/>

    </div>
}
export default Parent