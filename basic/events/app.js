var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person,events.EventEmitter);

var xiaoming = new Person("xiaoming");
var lilei = new Person("lilei");
var lucy = new Person("lucy");

var persons = [xiaoming,lilei,lucy];

persons.forEach(function(person){
    person.on("speak",function(message){
        console.log(`${message}! ${person.name}`);
    })
})

xiaoming.emit('speak','hello');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(message){
//     console.log(message);
// })

// myEmitter.emit('someEvent','the event was emitted');