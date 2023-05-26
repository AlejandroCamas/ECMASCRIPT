var lastname = 'Alejandro'; //aqui declaramos nuestra variable
lastname = 'Camas';
console.log(lastname); // aqui nosotros indicamos que queremos mostrar esa variable en pantalla
 
//AHORA USAREMOS OTRO METODO PARA DECLARAR LAS VARIABLES
let fruta = 'Manzana';//Declaramos la variable
fruta = 'kiwi';
console.log(fruta); // Indicamos igual que muestre en pantalla el resultado

//AHORA USAREMOS EL CONST

const fruits = () => {
    if (true){
        var fruta1 = 'Manzana';//funcion scope
        let fruta2 = 'kiwi';//block scope
        const fruta3 = 'Banana';//block scope
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
} 

fruits();
