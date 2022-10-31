import {legacy_createStore as createStore,combineReducers} from "redux"
import { heroReducer } from "./hero/hero.reducer"
import { movieReducer } from "./movie/movie.reducer"

let rootReducer = combineReducers({
    heroes:heroReducer,
    movies:movieReducer
})

const store = createStore(rootReducer)

export default store