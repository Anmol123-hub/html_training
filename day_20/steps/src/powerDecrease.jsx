import { Component } from "react";
import withPower from "./hoc/withPower";

class PowerDecrease extends Component{
    
    
    render(){
        return <div style={{border:"5px solid red"}}>
            <h4>Power : {this.props.power1}</h4>
            <button onClick={this.props.decrease}> Decrease The power</button>
        </div>
    }
}
export default withPower(PowerDecrease)