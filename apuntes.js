/*
FUNCIONES: 
function nombre_de_la_fcion(con la cantidad de parametros q necesite, o ninguno):{
    lo que necesito que me devuelva la funcion
}



function() ---> es la manera correcta de llamarla

/** * me ayuda a comentar una funcion

-- para guardar los datos de la funcion, hay que crear una constante donde se guarde los datos si lo
necesitaramos.
-- otra manera de crear funcion es sobre una constante
const resta= function (a,b) {
    return a - b;
}
se llama de la misma manera, resta();

-- FUNCION FLECHA:

const sumaDos(A,B) => {
    RETURN A + B
}
si tenes una sola lìnes no hace falta poner la llave de funcion

para guardar la funcion si o si hay que guardarla sobre una variable

*/


/* metodos

- join toma como valor un array y los une formando un  nuevo string

let num= [1,2,3,4]
console.log(num.join(" ")

- split se utiliza para separar un string o cadena,le pasa a array, separando con el separador que indicamos

- trim ... trimEnd, trimStart
si tenes un texto, te saca el espacio desde el inicio al final
console.log(text.trim())

- filter,  filtra lo que le indicamos, funciona con array. se usa como funcion flech

- numFilter.filter(a=> a == 2)

- find, filtra lo que indicamos, en base a una funcion, y devuelve el resultado pedido solo una vez. no devuelve un array

- indexOf, le pasas un valor y te devuelve la posicion del valor en el array

- lastIndexOf, recorre de atras hacia adelante, y te pasa la ultima posicion del valor en el array.

- include, devuelve un booleano,  es una pregunta. te dice si el valor esta o no en el array

- map,  hace un mapeo del array, y te devuelve un nuevo array. hace una copia y lo modifica

- reduce, recibe 2 parametros. tambien recibe una funcion flecha

*/ 

/* DOM

con DOM podemos modificar el html a gusto o como sea necesario..
por ende puedi una etiqueta ya contenedor o no y modifique lo q contiene

document... (seria todo mi HTML)

METODOS DE DOCUMENT

metodos de seleccion de etiquetas:

document.querySelector()-> recibe: nombre de la etiqueta(etiqueta), id(#), y clase(.)
document.querySelectorAll()-> devuelve un array de todos los elementos q cumplan
document.getElementById("id")-> recibe solo el Id son el #
document.getElementByClassName("clases")´recibe solo clases sin el punto


MODIFICADORES

const contenedor = document.querySelector("#contenedor")// supongamos q es un div
contenedor.innerHTML= "<H1>CONTENIDO</H1>" == document.querySelector("#contenedor").innerHTML

innerText -> recibe texto, no etiquetas
contenedor.insertAdjacentHTML(posicion, texto)


EVENTOS

button.addEventListener("tipo evento", funcion del evento) = click, key, blur, focus (eventos)



*/ 