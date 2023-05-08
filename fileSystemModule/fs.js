const fs = require('fs');

//Leer archivo
console.log('antes de lectura')
fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    //console.log(err);
    throw err;
  }
    console.log(contenido);
});
console.log('despues de lectura')

//Cambiar nombre
console.log('antes de cambiar el nombre')
fs.rename('index.html', 'main.html', (err) => {
if(err){
  throw err;
}
console.log('Nombre cambiado exitosamente!');
});
console.log('despues de cambiar el nombre')

//Agregar contenido al final de un archivo. (crea un archivo nuevo si no existe)
console.log('antes de agregar contenido al final')
fs.appendFile('main.html', '<p>Hola</p>', (err) => {
  if(err) {
    throw err;
  }
  console.log('Archivo actualizado!');
});
console.log('despues de agregar')

//Reemplazar todo el contenido del archivo. (tambien crea un archivo nuevo si no existe)
console.log('antes de reemplazar')
fs.writeFile('main.html', 'Contenido nuevo', (err) => {
  if(err) {
    throw err;
  }
  console.log('Contenido reemplazado.');
});
console.log('despues de reemplazar')

//Eliminar archivos
console.log('antes de eliminar')
fs.unlink('main.html', (err) => {
if(err) {
  throw err;
}
console.log('Archivo eliminado.');
});
console.log('despues de eliminar')

///Metodo Sincrono (terminacion de los metodos en Sync, no se requiere error handling)

//Leer archivo
console.log('antes de lectura')
//readFileSync retorna el archivo
const file = fs.readFileSync('index.html', 'utf-8');
console.log(file);
console.log('despues de lectura')

//Cambiar nombre
console.log('antes de cambiar el nombre')
fs.renameSync('index.html', 'main.html');
console.log('despues de cambiar el nombre')

//Agregar contenido al final de un archivo. (crea un archivo nuevo si no existe)
console.log('antes de agregar contenido al final')
fs.appendFileSync('main.html', '<p>Hola</p>');
console.log('despues de agregar')

//Reemplazar todo el contenido del archivo. (tambien crea un archivo nuevo si no existe)
console.log('antes de reemplazar')
fs.writeFileSync('main.html', 'Contenido nuevo');
console.log('despues de reemplazar')

//Eliminar archivos
console.log('antes de eliminar')
fs.unlinkSync('main.html');
console.log('despues de eliminar')