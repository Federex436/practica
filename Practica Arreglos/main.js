let lenguajes = ['Python', 'JavaScript', 'Csharp', 'C++', 'Java', 'PHP', 'Ruby']
//1
lenguajes.push('Go')
console.log(lenguajes)
// 2
lenguajes.shift()
console.log(lenguajes)
//3
lenguajes.unshift('Kotlin')
console.log(lenguajes)
//4
const indice = lenguajes.indexOf('Java')
console.log ('indice de Java es: '+indice)
const eliminacion = lenguajes.splice(indice,2)
console.log(lenguajes)
console.log('Los elementos eliminados son: '+eliminacion)
//5
lenguajes.splice(2,0,"Rust", "Swift")
console.log(lenguajes)
//6
console.log(lenguajes)
//7
let longitud = lenguajes.length
console.log('Longitud: '+longitud)
console.log('El ultimo elemento es: '+lenguajes[longitud-1])
console.log(lenguajes[2])
//8
function arreglo() {
    lenguajes.forEach((element,index) => {
        console.log(index+'-'+element)
    });
}