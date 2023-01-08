const receivesAFunction = (cb) => {
    cb()
}
receivesAFunction()

const name = function(){
    console.log(`Hello I am a named function`)
}
const returnsANamedFunction = () => name()

const returnsAnAnonymousFunction = () => ()

