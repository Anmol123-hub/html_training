import {useParams} from "react-router-dom"

function WonderWoman(){
    let params = useParams()
    return <div>
        <h1>WonderWoman</h1>
        <h2>Quantity is: {Number(params.qty)||0}</h2>
    </div>
}
export default WonderWoman