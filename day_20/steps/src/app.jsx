import { Component } from "react";
import PowerDecrease from "./powerDecrease";
import PowerIncrease from "./powerIncrease";

class App extends Component{

    render(){
        
        return <div>
            <h2>Application Component</h2>
            <PowerIncrease/>
            <br />
            <PowerDecrease/>
        </div>
    }
}
export default App