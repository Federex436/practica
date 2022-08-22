function guardar(){

    let nuevo_cliente = {
        nombre:document.getElementById("inp_nombre").value,
        apellido:document.getElementById("inp_apellido").value,
        dni:document.getElementById("inp_dni").value
    }

    if("lista_clientes" in localStorage){
        let grilla_clientes = JSON.parse(localStorage.getItem("listas_clientes"))
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }else{
        let grilla_clientes= []
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }
}



function editar(index){

    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))

    document.getElementById("inp_nombre").value = lista_clientes[index].nombre
    document.getElementById("inp_apellido").value = lista_clientes[index].apellido
    document.getElementById("inp_dni").value = lista_clientes[index].dni
    
    localStorage.setItem("indice",index)

    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_actualizar").style.display = 'block'

}
function actualizar_cliente(){
    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
    let indice = localStorage.getItem("indice")
    lista_clientes[indice].nombre = document.getElementById("inp_nombre").value
    lista_clientes[indice].apellido = document.getElementById("inp_apellido").value
    lista_clientes[indice].dni = document.getElementById("inp_dni").value
    localStorage.setItem("lista_clientes",JSON.stringify(lista_clientes))
    obtener_clientes()

    document.getElementById("btn_actualizar").style.display = 'none'
    document.getElementById("btn_guardar").style.display = 'block'
    varciar_formulario()
}

function varciar_formulario(){
    document.getElementById("form_client").reset()
}