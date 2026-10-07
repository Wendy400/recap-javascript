//visibility or accesibility
//hoisting


greet("joy")
function greet(name){
    console.log(`hello there ${name} `)
}

//welcome()
//anonymous function is not hoisted, here calling the function on top it throws an error, but calling welcome there below is successful.
const welcome= function (){
    console.log("welcome to moringa school")

}
welcome()




let x= "Global"

function scopeExperiment(){
    let y ="local"

    function inner(){
        let z = "functional"
        console.log(x)
        console.log(y)
        console.log(z)
    }
    inner()
}

console.log(scopeExperiment())