import { useNavigate } from "react-router-dom";

function Batman(){
    let batNav = useNavigate();
    return <div>
        <h1>Batman</h1>
        <button onClick={ ()=> batNav("/superman", { replace : true })}>Navigate to Batman</button>
    </div>
}
export default Batman