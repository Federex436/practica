
//caso 1
//estmos declarando e inicializando una variable
//si uso let dentro de un if etc no puedo usarla desde afuera pero al revez si
let numero = 10

if (numero == 10) {
    numero = 22
    console.log(numero)
}
console.log(numero)


//caso 2
var numero2 = 55
if (numero == 55) {
    numero2 = 77
    console.log(numero2)
}
console.log(numero2)