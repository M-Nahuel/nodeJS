const promesaCumplida = false;

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promesaCumplida) {
            resolve('Promesa Cumplida!');
        } else {
            reject('Promesa Rechazada...');
        }
    },3000);
});

const handleTrue = (value) => {
    console.log(value);
}

const handleFalse = (why) => {
    console.log(why);
}

promesa.then(handleTrue, handleFalse);
