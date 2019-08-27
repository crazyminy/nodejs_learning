function callFunction(fun){
    fun();
}

var sayBye = function(){
    console.log("Bye!");
}

function sayHi(){
    console.log("hi!");
    callFunction(sayBye);
}

sayHi();



sayBye();
callFunction(sayBye);