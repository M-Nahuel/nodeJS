const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProducts) => {
    console.log(`Se realizo una compra de $${total}`);
    console.log(`Numero de articulos: ${numProducts}`)
});

emisorProductos.emit('compra', 500, 4);

