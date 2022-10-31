import { ADD_HERO, REMOVE_HERO, SET_HERO } from "./hero.types"

const heroInitialState = {
    numOfHeroes:0
}

const heroReducer = (state=heroInitialState,action)=>{
    switch(action.type){
        case ADD_HERO:return{...state,numOfHeroes:state.numOfHeroes+1}
        case REMOVE_HERO:return{...state,numOfHeroes:state.numOfHeroes-1}
        case SET_HERO:return{...state,numOfHeroes:action.paylod}
        default: return state
    }
}
export {heroReducer}