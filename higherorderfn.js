//higher order function takes another function as an argument eg sayGoodbye


const greetings = (name) => {
    console.log(`hello ${name}`)

}
const sayGoodBye = (name, fn) => {
    fn(name)
    console.log("goodbye")

}
sayGoodBye("Mighty", greetings)



