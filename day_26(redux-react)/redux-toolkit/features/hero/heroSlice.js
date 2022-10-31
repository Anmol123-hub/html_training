const createSlice = require("@reduxjs/toolkit").createSlice
const initialState={
    numberOfHeroes:0
}
const heroSlice = createSlice({
    name:"Hero",
    initialState:initialState,
    reducers:{
        addHero:(state)=>{
            state.numberOfHeroes++
        },
        removeHero:(state)=>{
            state.numberOfHeroes--
        }
    }
})
module.exports=heroSlice.reducer
module.exports.heroAction=heroSlice.actions