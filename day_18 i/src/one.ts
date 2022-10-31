
function plus(){
    let num1= document.getElementById('num1') as HTMLInputElement | null
    let num2= document.getElementById('num2') as HTMLInputElement | null
    

    let c = Number(num1?.value)+Number(num2?.value)
    document.getElementById("out")!.innerHTML = c +""
}
function mul(){
    let num1= document.getElementById('num1') as HTMLInputElement | null
    let num2= document.getElementById('num2') as HTMLInputElement | null
    let c = Number(num1?.value)*Number(num2?.value)
    document.getElementById("out")!.innerHTML = c +""
}
function minus(){
    let num1= document.getElementById('num1') as HTMLInputElement | null
    let num2= document.getElementById('num2') as HTMLInputElement | null
    let c = Number(num1?.value)-Number(num2?.value)
    document.getElementById("out")!.innerHTML = c +""
}
function divide(){
    let num1= document.getElementById('num1') as HTMLInputElement | null
    let num2= document.getElementById('num2') as HTMLInputElement | null
    let c = Number(num1?.value)/Number(num2?.value)
    document.getElementById("out")!.innerHTML = c +""
}

function init(){
    document.getElementsByTagName("button")[0].addEventListener("click",plus)
    document.getElementsByTagName("button")[1].addEventListener("click",minus)
    document.getElementsByTagName("button")[2].addEventListener("click",mul)
    document.getElementsByTagName("button")[3].addEventListener("click",divide)
}



document.addEventListener("DOMContentLoaded",init)

// interface IPerson{
//     name:String;
//     canWalk():string;
// }
// class Person implements IPerson{
//     constructor(public name:string){}
//     canWalk(){
//         return "I can walk"
//     }
// }
// class Hero extends Person{
//     #mission = "my secret mission";
//     static version = 1001;
//     constructor(
//         public title:string,

//     )
// }