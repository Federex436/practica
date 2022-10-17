
async function consumir_datos(){

    //Realizo la peticion http por el metodo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')

    //Solo conservo lo datos JSON
    const datos_definitivos = await datos.json()
    
    datos_definitivos.forEach(element => {
        console.log(element.name)     
    });
}

//invoco la funcion
consumir_datos()