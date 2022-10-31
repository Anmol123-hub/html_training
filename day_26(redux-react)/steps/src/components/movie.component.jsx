import { useDispatch, useSelector } from "react-redux";
import { addmovie, removemovie, setmovie } from "../redux";

let MovieHookComp = ()=>{
    const numOfMovies = useSelector(state=>state.movies.numOfMovies)
    const dispatch = useDispatch()
    return <div>
        <h2>Movies Section</h2>
            <h3>Movie : {numOfMovies}</h3>
            <button onClick={()=>dispatch(addmovie())}>Add Movie</button>
            <button onClick={()=>dispatch(removemovie())}>Remove Movie</button>
            <button onClick={()=>dispatch(setmovie("Krrish"))}>Set Important Movie</button>
    </div>
}
export default MovieHookComp