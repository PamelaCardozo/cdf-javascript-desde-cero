/* 
    Crear una etiqueta desde JS

-| document.createElement('div'); 

Ejemplos: 

-| document.createElement('div') 

-| const div = document.createElement('div')


    Agregar una etiqueta agregada a otra existente o nueva.

-| const div = document.createElement('div')  // Creamos un div
-| const p = document.createElement('p')      // Creamos un p

-|  div.appendChild( p )    // agregamos "p" dentro de "div" 


    Agregarle contendido a un elemento creado. Ejemplo "p"

-| const p = document.createElement('p')    // Creamos el elemento
-| p.textContent = "Contenido tipo texto a agregar"     // Le agregamos el contenido en formato texto


const body = document.querySelector('body')

body.appendChild(div)

document.querySelector('') etiquetas, clases, id


    Agregar clases a la etiqueta

-| const p = document.createElement('p')
-| p.classList.add('') // bot => resp-bot | user => resp-user

*/

// Ejemplo agregar mensajes

const mensaje = document.querySelector('#chat')
const btnMensaje = document.getElementById('send-msg')
const contenedor = document.querySelector('#contenedor')

function guardarMensaje(msg){
    const p = document.createElement('p')
    p.textContent = msg
    p.classList.add('resp-user')
    contenedor.appendChild(p)
    mensaje.value = ""
}

function respuestaBot(msg){
    console.log(msg)
    const mensaje = msg.toLowerCase()
    let resp;
    if(mensaje.includes('hola') && mensaje.includes('buenas') ){
        resp = "hola como estas?"
    }else if(mensaje.includes('chau')){
        resp = "Chau, hasta luego!"
    }else{
        resp = "perdona no entendí"
    }
    const div = document.createElement('div')
    div.innerHTML = `<img class="img-bot" src="https://img.freepik.com/vector-premium/chat-bot-vector-logo-diseno-concepto_418020-241.jpg" alt="">
    <p class="resp-bot">${resp}</p>`
    div.classList.add('contenedor-bot')
    contenedor.appendChild(div)
    contenedor.scrollTop = contenedor.scrollHeight
}

btnMensaje.addEventListener('click', () => {
    const msg = mensaje.value
    guardarMensaje(msg)
    respuestaBot(msg)
})

mensaje.addEventListener('keydown', (e) => {
    const msg = mensaje.value
    if(e.key === "Enter" && mensaje.value != ""){
        e.preventDefault();
        guardarMensaje(msg)
        respuestaBot(msg)
    }
})