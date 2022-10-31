import { Component } from "react";
import HeroHookComp from "./components/hero-hook.component";
import HeroComp from "./components/hero.component";
import MovieHookComp from "./components/movie.component";

class App extends Component{
    render(){
        return <div>
            <h1>Anmol Varshney</h1>
            <HeroHookComp/>
            <MovieHookComp/>
        </div>
    }
}
export default App