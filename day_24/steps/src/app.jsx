import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
// import Home from "./components/home.component"
// import Batman from "./components/batman.component"
// import Superman from "./components/superman.component"
// import Aquaman from "./components/aquaman.components"
// import WonderWoman from "./components/wonderwoman.component"
// import NotFound from "./components/notfound.component"
import "./components/myRoutes.css"
import React,{ useState,Suspense } from "react"

let Aquaman = React.lazy(()=>import( "./components/aquaman.components"))
let Home = React.lazy(()=>import("./components/home.component")) 
let Batman = React.lazy(()=>import("./components/batman.component")) 
let Superman = React.lazy(()=>import("./components/superman.component")) 
let WonderWoman = React.lazy(()=>import("./components/wonderwoman.component")) 
let NotFound = React.lazy(()=>import("./components/notfound.component")) 
let App=()=>{
  let [qty,updateQty] = useState(0)
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
        <h2>Quantity {qty}</h2>
        <label htmlFor="qty">
          <input type="range" onChange={(evt)=>updateQty(evt.target.value)} value={qty} id="qty" />
        </label>
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
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/superman">Superman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to={"/superman/"+qty}>Superman Recieving </NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/wonderwomen">Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/aquaman">Aquaman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/flash">Flash Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/cyborg">Cyborg Component</NavLink></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="batman" element={<Suspense fallback={<>loading...</>}><Batman/></Suspense>}/>
            <Route path="superman" element={<Suspense fallback={<>loading...</>}><Superman/></Suspense>}/>
            <Route path="superman" element={<Suspense fallback={<>loading...</>}><Superman/></Suspense>}/>
            <Route path="superman/:qty" element={<Suspense fallback={<>loading...</>}><Superman/></Suspense>}/>
            <Route path="aquaman" element={<Suspense fallback={<>loading...</>}><Aquaman/></Suspense>}/>
            <Route path="wonderwoman" element={<Suspense fallback={<>loading...</>}><WonderWoman/></Suspense>}/>
            <Route path="wonderwoman/:qty" element={<Suspense fallback={<>loading...</>}><WonderWoman/></Suspense>}/>
            <Route path="flash" element={<Suspense fallback={<>loading...</>}><Superman/></Suspense>}/>
            <Route path="*" element={<Suspense fallback={<>loading...</>}><NotFound/></Suspense>}/>
        </Routes>
        </BrowserRouter>
    </div>
}
export default App