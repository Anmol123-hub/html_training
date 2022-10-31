const createSlice = require("@reduxjs/toolkit").createSlice
const initialState={
    numberOfMovies:0
}
const movieSlice = createSlice({
    name:"Movie",
    initialState:initialState,
    reducers:{
        addHero:(state)=>{
            state.numberOfMovies++
        },
        removeHero:(state)=>{
            state.numberOfMovies--
        }
    },
    
})

module.exports=movieSlice.reducer
module.exports.movieAction=movieSlice.actions