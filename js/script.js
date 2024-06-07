// Declaracion de clase con metodo para mostrar nombre y precio de los elementos en la consola.

class Insumos {
    constructor(nombre, tamaño, precio, stock) {
        this.nombre = nombre.toUpperCase(),
            this.tamaño = tamaño,
            this.precio = precio,
            this.precioConIVA = precio * 1.21,
            this.stock = stock
    }
    mostrarElemento() {
        console.log("nombre " + this.nombre + " precio " + this.precio);
    }
}

//Declaracion de array.

const listaDeInsumos = []

// Funcion que toma un nuevo elemento y lo agrega al array.

function nuevoInsumo(insumo) {
    listaDeInsumos.push(insumo);
}

// Funcion con iteracion y llamado al metodo mostrarElemento(). Sirve para pruebas en caso de querer usar el arreglo.

function mostrarArreglo() {
    let i = 0;
    listaDeInsumos.forEach(element => {
        console.log(i);
        element.mostrarElemento()
        i++;
    })
}

//Funcion para eliminar un elemento del array mediante prompt vinculada al boton del html

function eliminarElemento() {
    listaDeInsumos.splice(prompt("Ingrese el numero del elemento que desea eliminar"), 1);
    mostrarLista();
}

//Funcion para agregar un elemento al array mediante prompts vinculada al boton del html

function agregarElemento() {
    let nombre = prompt("Ingrese el nombre");
    let tamaño = prompt("Ingrese el tamaño");
    let precio = parseFloat(prompt("Ingrese el precio"));
    let stock = parseInt(prompt("Ingrese el stock"));
    nuevoInsumo(new Insumos(nombre, tamaño, precio, stock));
    mostrarLista();
}

//Iteracion que muestra la el array completo y se refresca despues de cada modificacion.

function mostrarLista() {
    const insumos = document.getElementById("lista");
    insumos.innerHTML = null; // aca declaro null para que tome el array actualizado y lo muestre luego de la iteracion.
    let i = 0;
    listaDeInsumos.forEach(element => {
        let producto1 = document.createElement("li");//Creo un elemento <li>
        let insumo = `Elemento n°: ${i} | Nombre: ${element.nombre} | Tamaño: ${element.tamaño} | Precio con IVA: ${element.precioConIVA.toFixed(2)} | Stock: ${element.stock}`;
        i++;
        producto1.innerHTML = insumo;
        insumos.appendChild(producto1);
        producto1.style.listStyle = 'none'
        producto1.style.padding = '1rem';
        producto1.style.width = '100%';
    });
}

//Asignacion de elementos del array

nuevoInsumo(new Insumos("guantes", 'M', 500, 500));
nuevoInsumo(new Insumos("cartuchos", 'M', 543.7, 10));
nuevoInsumo(new Insumos("agujas", 'L', 234.5, 20));
nuevoInsumo(new Insumos("tintas", 'S', 142.4, 50));
nuevoInsumo(new Insumos("maquinas", " ", 15678.9, 1));
nuevoInsumo(new Insumos("punteras", 's', 476.5, 12));
mostrarLista()