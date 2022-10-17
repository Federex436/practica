
let usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    dni: 33258741,
    correo:{
        gmail: 'itcipolletti@gmail.com',
        outlook: 'itscipolletti@outlook.com'
    },
    localidad: 'Cipolletti'
}
//forma 1
//const gmail = usuario.correo.gmail
//const outlook = usuario.correo.outlook

//forma 2
//destructuring object
const { gmail, outlook } = usuario.correo  

console.log(`
    Apelltido: ${usuario.nombre}
    Nombre: ${usuario.apellido}
    DNI: ${usuario.dni}
    Gmail: ${gmail}
    Outlook: ${outlook}
`)