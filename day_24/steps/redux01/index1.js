//action type is a constant name of event 
//action creator is function that returns an action object 
//reducer is a function which has switch cases to call functions based on action types
//initial state is initial value of store object 
//store is an object that stores all shared states of your application
//subscribe/unsubscribe to listen to changes of the store
//dispatch is a method that can take action object
let redux = require("redux")
let createStore = redux.legacy_createStore
const ADDHERO = "ADDHERO"
let addhero = ()=>{
    return{
        type:ADDHERO
    }
}
let initialState={
    numberOfHeros:0
}
let reducer = (state=initialState,action)=>{
    switch(action.type){
        case ADDHERO: return {numberOfHeros:state.numberOfHeros+1}
        default: return state
    }
}
let store = createStore(reducer)
console.log("Initial value of store",store.getState())
let unsubscribe = store.subscribe(()=>console.log("Subscribed",store.getState()))
store.dispatch(addhero())
store.dispatch(addhero())
store.dispatch(addhero())
// unsubscribe()
store.dispatch(addhero())
store.dispatch(addhero())