

let name = prompt("Ingrese su nombre:")
let apellido = prompt("Ingese su apellido")
let edad = prompt ("Ingresar su edad:") 

alert("Bienvenid@ " + name + " " + apellido + ", tu edad es " +edad )





const tatuajes = [
{nombre: "Blackwork", precio: 800},
{nombre: "Tradicional(Old School)", precio: 1200},
{nombre: "Japonés Tradicional y Neo Japonés", precio: 1500},
];

let carrito = []

let seleccion = prompt ("Hola, desea realizarse algún tatuaje si o no")
while(seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese si o no")
    seleccion = prompt ("Hola, desea realizarse algún tatuaje si o no")
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de tatuajes")
    let todoslosTatuajes = tatuajes.map(
    (tatuajes)=> tatuajes.nombre + " " + tatuajes.precio + "$"
    );
    alert(todoslosTatuajes.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitarnos, ¡hasta pronto!")
}

while(seleccion != "no") {
    let tatuaje = prompt("Agrega un tatuaje a tu carrito")
    let precio = 0 

    if(tatuaje == "Blackwork" || tatuaje =="Tradicional(Old School)"||tatuaje =="Japonés Tradicional y Neo Japonés"){
        switch(tatuaje) {
        case "Blackwork":
            precio = 800
            break 
        case "Tradicional(Old School)":
            precio = 1200
            break 
        case "Japonés Tradicional y Neo Japonés":
            precio = 1500
            break;
        default:
            break;
        }
    let unidades = parseInt(prompt("¿Cuántos tatuajes se quiere hacer?"))

    carrito.push({tatuaje, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese tatuaje")
    }
    
    seleccion = prompt("¿Desea seguir eligiendo tatuajes?")
    while(seleccion === "No"){
        alert("¡Gracias por la compra, hasta pronto!")
        carrito.forEach((carritoFinal) => {
        console.log('tatuaje: ${carritoFinal.tatuaje}, unidades: ${carritoFinal.unidades},total a pagar por tatuaje ${carritoFinal.unidades * carritoFinal.precio}')
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log('el total a pagar por su compra es: ${total}')