import { Component } from "react";
import { connect } from "react-redux";
import {addhero,removehero,sethero} from "../redux"
class HeroComp extends Component{
    render(){
        return <div>
            <h2>Counter</h2>
            <h3>Value : {this.props.numOfHeroes}</h3>
            <button onClick={this.props.addhero}>Add Hero</button>
            <button onClick={this.props.removehero}>Remove Hero</button>
            <button onClick={this.props.sethero}>Set Hero</button>
        </div>
    }
}

const mapStateToProps=(state)=>{
    return{
        numOfHeroes:state.heroes.numOfHeroes
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addhero:()=>dispatch(addhero()),
        removehero:()=>dispatch(removehero()),
        sethero:()=>dispatch(sethero(500))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeroComp)