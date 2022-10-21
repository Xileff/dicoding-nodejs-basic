// NodeJS EventEmitter
const { EventEmitter } = require('events')
const myEventEmitter = new EventEmitter();

// method
const makeCoffee = name => console.log(`Kopi ${name} telah dibuat!`)

const makeBill = price => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

// Mendaftarkan fungsi makeCoffee dan makeBill sebagai listener event coffee-order
myEventEmitter.on('coffee-order', onCoffeeOrderedListener)

// Emit event 'coffee-order'
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });