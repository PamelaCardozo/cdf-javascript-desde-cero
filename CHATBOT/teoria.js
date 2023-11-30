/* 
    Crear una etiqueta desde JS

-| document.createElement('etiqueta'); 

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



document.querySelector('body').appendChild(div) -- div -- p


*/

// Ejemplo agregar mensajes

const contenedor = document.querySelector('#contenedor') // Agarramos el div donde agregaremos los mensajes
const input = document.querySelector('#msj') // agarramos el input, para escuchar el evento y lo que contiene

// Escuchamos el evento de "ENTER" sobre el input

input.addEventListener('keydown', (e) => {
    
    if(e.key === "Enter"){ // Si la tecla presionada es "Enter" agrega el msj
        e.preventDefault(); // resetea el evento que tiene por default
        const p = document.createElement('p') // Creamos una etiqueta p
        p.textContent = input.value // e.value => Agregaría el valor que contiene en el momento el input
        p.classList.add('mensaje-agregado') // agregamos una clase a la etiqueta p creada
        contenedor.appendChild(p) // Agregamos el elemento p creado dentro de contenedor
        input.value = "" // reseteamos el input a vacio
    }
})