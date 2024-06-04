const EventEmitter = require('../node package manager/node_modules/event-emitter');

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
  console.log(`kopi ${name} telah dibuat`);
};

const makeBill = ({price})=>{
  console.log(`Bill sebesar ${price} telah dibuat`);
}

const onCoffeeOrderedListener = ({name, price}) =>{
  makeCoffee({name});
  makeBill({price});
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-erder', {name: 'Kapal Api', price: 15000});

myEventEmitter.emit('coffee-order', {name: 'Torabika', price: 20000});
