import { Component } from "react"

let withPower = (OrginalCon)=>{
    return class TempComp extends Component{
        state={
            power:0,
            power1:100
        }
        inCrease = ()=>{
            this.setState({
                power:this.state.power+1
            })
        }
        inDecrease = ()=>{
            this.setState({
                power1:this.state.power1-1
            })
        }
        render(){
            return <OrginalCon power={this.state.power} power1={this.state.power1} increase={this.inCrease} decrease={this.inDecrease}/>
        }
    }
}
export default withPower