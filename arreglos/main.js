//crear un array
let arreglo = ['Javascript', 'Php', 'Java', 'Csharp']

//la cantidad de elementos de un arreglo (longitud)
let longitud = arreglo.length
console.log('Longitud: '+longitud)

//PRIMER ELEMENTO ARREGLO
console.log(arreglo[0])

//ultima posicion arreglo
console.log(arreglo[longitud-1])

//recorrer un array en forEach

arreglo.forEach((element,index) => {
    console.log(index+'-'+element)
});

//agregar un elemento al final de la array
arreglo.push('Go')
console.log(arreglo)

//eleminar el ultimo elemento de una array
arreglo.pop()
console.log(arreglo)

//como agregar un elemento al inicio de un array
arreglo.unshift('Go')
console.log(arreglo)

//como eliminar el primer elemento de un array
arreglo.shift()
console.log(arreglo)

//conocer el indice de un elemento
const indice = arreglo.indexOf('Java')
console.log ('indice de Java es: '+indice)
console.log(arreglo[indice])

//elimnar un elemento conociendo su indice
//const eliminacion = arreglo.splice(indice,1)
//console.log(arreglo)
//console.log('elemento eliminado: '+eliminacion)

//eliminar mas de un elemento
//slice(indice,cant)
const eliminacion = arreglo.splice(indice,2)
console.log(arreglo)
console.log('elemento eliminado: '+eliminacion)

//generar copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))

//cuando concatenamos un array con un string todo se traduce a una cadena de texto
console.log('arreglo copia: '+copia)
console.log('original: '+arreglo)

//agregar elementos por indice
//siempre dejar la cantidad de elementos en 0
arreglo.splice(1,0,"Java")
console.log(arreglo)

//funcion tradicional
function operar (){
    console.log('probando')
}
//funcion flecha (de esta forma si solo tiene un elemento)
const calcular = () => console.log('probando')