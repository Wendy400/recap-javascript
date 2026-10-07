const greetings = (name) => {
    console.log(`hello ${name}`)

}
const sayGoodBye = (name, fn) => {
    fn(name)
    console.log("goodbye")

}
sayGoodBye("Mighty", greetings)
