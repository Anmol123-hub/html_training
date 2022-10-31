import {BrowserRouter,Routes,Route, Link,NavLink} from "react-router-dom"
import Home from "./components/home.component"
import Batman from "./components/batman.component"
import Superman from "./components/superman.component"
import Aquaman from "./components/aquaman.components"
import WonderWoman from "./components/wonderwoman.component"
import NotFound from "./components/notfound.component"
import "./components/myRoutes.css"
let App=()=>{
    let activeFun1 = ({isActive})=> isActive ? 'box' : 'plainBox';
  let activeFun2 = ({isActive})=> {
    return {
      width: "200px",
      display: "inline-block",
      backgroundColor: isActive ? "crimson" : "darkorange",
      color:  "papayawhip",
      textAlign: "center",
      padding: "5px",
    }
  };
    return <div>
        <h1>Main App</h1>
        <BrowserRouter>
        {/* <ul>
            <li><Link to="/">Home Component</Link></li>
            <li><Link to="batman">Batman Component</Link></li>
            <li><Link to="superman">Superman Component</Link></li>
            <li><Link to="aquaman">Aquaman Component</Link></li>
            <li><Link to="wonderwoman">Wonder Women Component</Link></li>
            <li><Link to="flash">Flash Component</Link></li>
            <li><Link to="anmol">Anmol</Link></li>
        </ul> */}
        <ul>
        <li><NavLink end className={activeFun1} to="/">Home Component</NavLink></li>
          <li><NavLink style={ activeFun2 } to="/batman">Batman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box brdr' : 'plainBox' } to="/superman">Superman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/wonderwomen">Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/aquaman">Aquaman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/flash">Flash Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/cyborg">Cyborg Component</NavLink></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="batman" element={<Batman/>}/>
            <Route path="superman" element={<Superman/>}/>
            <Route path="aquaman" element={<Aquaman/>}/>
            <Route path="wonderwoman" element={<WonderWoman/>}/>
            <Route path="flash" element={<Superman/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
}
export default App