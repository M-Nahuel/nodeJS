const orderState = () => {
    return Math.random() < 0.8;
};

const order = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(orderState()) {
            resolve('Pedido exitoso, su pizza se esta preparando!')
        } else {
            reject('Ha ocurrido un error. Por favor vuelva a intentarlo.')
        }
    }, 3000);
});
/*
const orderHandle = (confirmMessage) => {
    console.log(confirmMessage);
};

const orderReject = (rejectMessage) => {
    console.log(rejectMessage);
}

order.then(orderHandle, orderReject);


//Alt syntax for handling
order
.then((confirmMessage) => {
    console.log(confirmMessage);
})
.then(null, (rejectMessage) => {
    console.log(rejectMessage);
});
*/

//Method chaining
//Catch()
order
.then((confirmMessage) => {
    console.log(confirmMessage);
})
//no need of `null` parameter
.catch((rejectMessage) => {
    console.log(rejectMessage);
});

//Alt syntax
/*
const orderHandle = (confirmMessage) => {
    console.log(confirmMessage);
};

const rejectHandle = (rejectMessage) => {
    console.log(rejectMessage);
};

order.then(orderHandle).catch(rejectHandle);
*/