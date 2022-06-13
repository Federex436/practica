async function dolar_hoy(){

    const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos = await dolar.json()

    let filas = []
    
    datos.forEach((element, index) => {      

        let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.casa.nombre}</td>
                <td>$${element.casa.compra}</td>
                <td>$${element.casa.venta}</td>
    
            </tr>
        `
        filas.push(fila)
    });
    document.getElementById("tbody").innerHTML = filas.join('')
}
dolar_hoy()