//evitar el script-->
        //Inicializamos o creamos la primer constante
        //Se declara la constante
        const numero = 22

        //Ventana emergente
        alert('Probando uso de alert')
        alert(numero)

        //consola de navegador
        console.log('Probando uso de consola')

        //asi muestra el texto y numero
        console.log('Edad: '+ numero)

        //template string
        console.log(`
            probando template:

            - item1
            - Edad: ${numero}
            - item2
        `)

        const dato_ingresado = prompt('Ingrese su DNI')
        //testeo
        console.log(dato_ingresado)