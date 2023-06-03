function newUser(name, age, country){
    var name = name || 'Alejandro'; //usamos el || para indicar que tenemos un valor o otro
    var age = age || 21; //
    var country = country || 'Mexico'
    console.log(name, age, country);
}

newUser();
newUser('Alejandro', 21 ,'mx');
// otra forma mas amigable

newUser();
newUser('Ale',21,'MX');

function newUser(name = 'Alejandro', age = 32, country = 'MC'){
    console.log(age, name, country);
}