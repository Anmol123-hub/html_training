import { useDispatch, useSelector } from "react-redux";
import { addhero, removehero, sethero } from "../redux";

let HeroHookComp = ()=>{
    const numberOfHeroes = useSelector(state=>state.heroes.numOfHeroes)
    const dispatch = useDispatch()
    return <div>
        <h2>Counter</h2>
            <h3>Value : {numberOfHeroes}</h3>
            <button onClick={()=>dispatch(addhero())}>Add Hero</button>
            <button onClick={()=>dispatch(removehero())}>Remove Hero</button>
            <button onClick={()=>dispatch(sethero(500))}>Set Hero</button>
    </div>
}
export default HeroHookComp