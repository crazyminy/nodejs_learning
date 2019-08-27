var counter = (arr)=>{
    return "there are " + arr.length +" elements in the array";
}

function adder(a,b){
    return `the sum of ${a} and ${b} is ${a+b}`;
}

var pi = 3.14;

// module.exports.counter= counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
}