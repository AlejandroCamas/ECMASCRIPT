//declaramos nuestras variables con nuestros textos.
let hello ='hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!'; //las comillas con espacio vacias significa un espacio en el texto
console.log(epicPhrase); //lo que le indicamos "console.log" = muestra en consola/pantalla "(nuestra variable)" que imprima pantalla nuestra variable


//template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)
//como podemos apreciiar en este ejemplo es lo mismo que arriba solo que mas entendible e amigable.

//multi-line strings
let lorem = 'esto es un string \n ' + 'esto es otra linea';
let lorem2 = `esta es una frase 
para dar un ejemplo`;

console.log(lorem);
console.log(lorem2);