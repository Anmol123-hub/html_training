import myFamily from "./myFamily.js"
class anmol extends myFamily{
    firstname = "Default"
    lastname = "Default"
    #hobby = "chess"
    static version = 1001
    constructor(a,b,c){
        super(c)
        this.firstname = a
        this.lastname = b
    }
    fullname(){
        return this.firstname + " " + this.lastname 
    }
    static saypower(){
        return 7 
    }
    get hobby(){
        return this.#hobby
    }
    set hobby(nhobby){
        this.#hobby = nhobby 
    }
}
export default anmol