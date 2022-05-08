function sumar(tension,resistencia) {
    const resultado = parseInt(tension) / parseInt(resistencia)
    return resultado
   }
   
   function recolectar_ohm() {
       const tension= document .getElementById("inp_d1").value
       const resistencia= document .getElementById("inp_d2").value
   //invoca a la funcion
       const respuesta = sumar(tension,resistencia)
       document.getElementById("h_resultado").textContent = respuesta
   }