import { ADD_MOVIE, REMOVE_MOVIE, SET_MOVIE } from "./movie.types"

const addmovie = ()=>{
    return{
        type:ADD_MOVIE
    }
}
const removemovie = ()=>{
    return{
        type:REMOVE_MOVIE
    }
}
const setmovie = (num)=>{
    return{
        type:SET_MOVIE,
        paylod:num
    }
}

export {addmovie,removemovie,setmovie}
