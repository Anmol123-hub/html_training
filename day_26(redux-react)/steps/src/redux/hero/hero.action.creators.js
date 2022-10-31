import { ADD_HERO, REMOVE_HERO, SET_HERO } from "./hero.types"

const addhero = ()=>{
    return{
        type:ADD_HERO
    }
}
const removehero = ()=>{
    return{
        type:REMOVE_HERO
    }
}
const sethero = (num)=>{
    return{
        type:SET_HERO,
        paylod:Number(num)
    }
}

export {addhero,removehero,sethero}
