const EventEmitter = require('../node package manager/node_modules/event-emitter');

const myEmitter = new EventEmitter();

const birthdayEventListener = (name)=>{
    console.log(`Happy birthday ${name}`);
}

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', 'Yosia');