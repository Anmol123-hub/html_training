import { Component } from "react";
import withPower from "./hoc/withPower";

class PowerIncrease extends Component{
    
    render(){
        return <div style={{border:"5px solid red"}}>
            <h4>Power : {this.props.power}</h4>
            <button onClick={this.props.increase}> Increase The power</button>
        </div>
    }
}
export default withPower(PowerIncrease)