// NodeJS EventEmitter
const { EventEmitter } = require('events')
const myEventEmitter = new EventEmitter();

// Methods
const makeCoffee = name => console.log(`Coffee ${name} is ready!`)

const makeBill = price => {
    console.log(`${price} bill has been generated!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

// Registering methods makeCoffee and makeBill as listeners to the event coffee-order
myEventEmitter.on('coffee-order', onCoffeeOrderedListener)

// Emit the event 'coffee-order'
myEventEmitter.emit('coffee-order', { name: 'Americano', price: 15000 });