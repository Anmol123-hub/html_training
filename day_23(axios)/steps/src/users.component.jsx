import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

let Users = ()=>{
    let[users,setUser] = useState([])
    let [nhero, createHero] = useState({ title : '', firstname : '', lastname : ''});
    // let [state,dispatch] = useReducer(reducerFun,{firstname:"",lastname:""})
    let [ehero, modifyHero] = useState({ _id:'', title : '', firstname : '', lastname : ''});
    let [toggle, toggleHandler] = useState(false);

    let refresh = ()=>{
        axios.get("http://localhost:2525/data").then(res => {
            setUser(res.data);
        })
    }

    let addHero = ()=>{
        axios.post("http://localhost:2525/data",nhero)
        .then(res => {
            createHero({ title : '', firstname : '', lastname : ''})
            refresh();
        })
        .catch(err => console.log("Error ", err))
    }
    let clickHandler = (evt)=>{
        createHero({...nhero, [evt.target.id] : evt.target.value})
    }
    let clickUpdateHandler = (evt)=>{
        modifyHero({...ehero, [evt.target.name] : evt.target.value})
    }

    let editHero = (hid)=>{
        axios.get("http://localhost:2525/getData/"+hid).then(res => {
            modifyHero(res.data);
            toggleHandler(true);
        })
    }
 
    let updateHero = () =>{
       axios.post("http://localhost:2525/updateData/"+ehero._id, ehero)
       .then(res => {
           modifyHero({ _id:'', title : '', firstname : '', lastname : ''});
           toggleHandler(false);
        refresh();
       } )
       .catch(err => console.log("Error ", err))
    };
    
    let deleteHero = (hid)=>{
       //console.log(hid,users);
       axios.delete("http://localhost:2525/delete/"+hid)
       .then( res => refresh())
       .catch(err => console.log(err));
    }

    
    useEffect(()=>{
        refresh()
    },[])
    

    return <div>
        <div>
        <h2>Heroes List</h2>
                { !toggle && <div>
                    <h3>Create Hero</h3>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input value={nhero.title} onInput={(evt)=> clickHandler(evt) } className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input value={nhero.firstname} onInput={(evt)=> clickHandler(evt) } className="form-control" id="firstname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input value={nhero.lastname} onInput={(evt)=> clickHandler(evt) } className="form-control" id="lastname" />
                    </div>
                    <button onClick={addHero} type="submit" className="btn btn-primary">Submit</button>
 
                </div>}
 
                {
                    toggle && <div>
                    <h3>Update Hero</h3>
                    <div className="mb-3">
                        <label htmlFor="edit_title" className="form-label">Title</label>
                        <input name="title" value={ehero.title} onInput={(evt)=> clickUpdateHandler(evt) } className="form-control" id="edit_title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edit_firstname" className="form-label">First Name</label>
                        <input name="firstname" value={ehero.firstname} onInput={(evt)=> clickUpdateHandler(evt) } className="form-control" id="edit_firstname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edit_lastname" className="form-label">Last Name</label>
                        <input name="lastname" value={ehero.lastname} onInput={(evt)=> clickUpdateHandler(evt) } className="form-control" id="edit_lastname" />
                    </div>
                    <button onClick={updateHero} type="submit" className="btn btn-primary">Update Hero</button>
 
                </div>
                }
 
                </div>
        <table className="table">
        <thead>
            <tr>
     
                <th scope="col">Sl #</th>
                <th scope="col">Title</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
          
            </tr>
        </thead>
        <tbody>
        
            {
                users.map((val,idx)=>{
                    return  <tr key={val._id}>
                                <th scope="row">{idx+1}</th>
                                <td>{val.title}</td>
                                <td>{val.firstname}</td>
                                <td>{val.lastname}</td>
                                <td><button onClick={()=> editHero(val._id)} className="btn btn-warning">Edit</button></td>
                                <td><button onClick={()=> deleteHero(val._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                })
            }
        </tbody>
        </table>
        
    </div>
}
export default Users