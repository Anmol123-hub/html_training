import { Component } from "react";

// class Hero extends Component{
//     render(){
//         return <div>
//             <h2>{this.props.title.toUpperCase()}</h2>
//             <h3>{this.props.version+10}</h3>
//         </div>
//     }
// }
class Hero1 extends Component{
    rating = 25
    render(){
        return <div>
            <h2>{this.props.title.toUpperCase()}</h2>
            <h3>{this.props.version+10}</h3>
            <h4>{this.rating}</h4>
            <ol>{
                this.props.list.map((val,idx)=>{
                    return <li key={idx}>{val}</li>
                })
            }
            </ol>
            <button onClick={()=>{
                this.rating=this.rating+1
                this.forceUpdate()}}>Counter</button>
        </div>
    }
}
export {Hero1}