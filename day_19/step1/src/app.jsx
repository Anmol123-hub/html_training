import { Component } from "react";
import ChilComp from "./child.component";



class App extends Component{
    state={
        title:"Anmol",
        power:0,
        version:0
    }
    increasePower=()=>{
        this.setState(function(currentState,currentProp){
            return{
            power:currentState.power + 1
            }
        
        },
        function(){
           console.log(this.state.power) 
        })
        
    }
    
    render(){
        return <div>
         
            <ChilComp version={100} power={this.state.power}></ChilComp>
            <button className="btn btn-danger" onClick={this.increasePower}>Power change</button>
            
            
        </div>
    }
}
export default App