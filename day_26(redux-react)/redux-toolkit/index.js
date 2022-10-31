const store = require("./app/store")
const heroAction = require("./features/hero/heroSlice").heroAction
const movieAction = require("./features/movie/movieSlice").movieAction

console.log("Initial State",store.getState())

const unsubscribe = store.subscribe(()=>{})

store.dispatch(heroAction.addHero())
store.dispatch(heroAction.addHero())
store.dispatch(heroAction.addHero())
store.dispatch(heroAction.removeHero())
store.dispatch(heroAction.addHero())
store.dispatch(heroAction.removeHero())

store.dispatch(movieAction.addHero())
store.dispatch(movieAction.addHero())
store.dispatch(movieAction.addHero())
store.dispatch(movieAction.addHero())
store.dispatch(movieAction.removeHero())
store.dispatch(movieAction.addHero())
store.dispatch(movieAction.removeHero())






unsubscribe()