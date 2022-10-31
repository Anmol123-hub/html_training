import {useParams,useNavigate} from "react-router-dom"
function Superman(){
    let params = useParams()
    let batNav = useNavigate();
    return <div>
        <h1>Superman</h1>
        <h2>Quantity is: {Number(params.qty)+10||0}</h2>
        <button onClick={ ()=> batNav("/wonderwoman/"+params.qty, { replace : true })}>Navigate to Batman</button>
    </div>
}
export default Superman