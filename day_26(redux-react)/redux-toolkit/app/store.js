const configureStore = require("@reduxjs/toolkit").configureStore
const heroReducer = require("../features/hero/heroSlice")
const movieReducer = require("../features/movie/movieSlice")
let logger = require("redux-logger").createLogger
// import { logger } from 'redux-logger'

const store=configureStore({
    reducer:{
        hero:heroReducer,
        movie:movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger())
})
module.exports = store