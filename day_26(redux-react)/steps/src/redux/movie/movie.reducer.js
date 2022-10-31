import { ADD_MOVIE, REMOVE_MOVIE, SET_MOVIE } from "./movie.types"

const heroInitialState = {
    numOfMovies:""
}


var movies = ["Kriish 3, ","Bahubali, ", "Kantara, ","KGF-2, ","Vikram, "]
var addmovies = new Array()
const movieReducer = (state=heroInitialState,action)=>{
    switch(action.type){
        case ADD_MOVIE:
            let randIndex = Math.round(Math.random()*movies.length-1)
            addmovies.push(movies[randIndex])
            return{...state,numOfMovies:addmovies+""}
        case REMOVE_MOVIE:
            addmovies.pop()
            return{...state,numOfMovies:addmovies+""}
        case SET_MOVIE:return{...state,numOfMovies:addmovies[addmovies.length-1]}
        default: return state
    }
}
export {movieReducer}