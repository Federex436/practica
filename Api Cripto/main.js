async function crypto_hoy(){

    const dolar = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const datos = await dolar.json()

    let filas = []
    
    datos.forEach((element, index) => {      
        //console.log(`
        //    ${element.casa.nombre} - Compra: ${element.casa.compra} - Venta:  ${element.casa.venta}
        //`)     

        //enganiamos a HTML para escribir codigo HTML y poder hacer que se actualize todo el tiempo la tabla
        let fila = `
            <tr>
                <td>${index}</td>
                <td>${element.image.name}</td>
                <td>${element.image.symbol}</td>
                <td>${element.image.current_price}</td>
                <td>${element.image.price_change_percentage_24h}</td>
                <td>${element.image.total_volume}</td>
    
            </tr>
        `
        filas.push(fila)
    });
//busca el elemento que se creo en tbody por id y copia todo como si fuera html sacando las comillas invertidas
    document.getElementById("tbody").innerHTML = filas.join('')
}
crypto_hoy()

//Comento el console log por el ejercico que tamos viendo