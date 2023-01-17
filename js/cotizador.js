let stockProductos = [
    {id: 1, nombre: "Kit Basico CCTV", tipo: "alarma", cantidad: 1, desc: "Kit compuesto por: DVR4ch,2camaras y disco de 1TB", precio: 60000, img: './Imagenes/Cctv/KitCCTV.webp'},
    {id: 2, nombre: "Dvr4ch", tipo: "cctv", cantidad: 1, desc: "Dvr 4 canales", precio: 35000, img: './Imagenes/Cctv/Dvr_4ch.jpeg'},
    {id: 3, nombre: "Dvr8ch", tipo: "cctv", cantidad: 1, desc: "Dvr 8 canales", precio: 45000, img: './Imagenes/Cctv/Dvr_8ch.jpeg'},
    {id: 4, nombre: "Dvr16ch", tipo: "cctv", cantidad: 1, desc: "Dvr 16 canales", precio: 65000, img: './Imagenes/Cctv/Dvr_16ch.jpg'},
    {id: 5, nombre: "Camara", tipo: "cctv", cantidad: 1, desc: "Camara 12v", precio: 9000, img: './Imagenes/Cctv/Camara.jpg'},
    {id: 6, nombre: "Disco 1TB", tipo: "cctv", cantidad: 1, desc: "Disco 1TB de capacidad", precio: 17000, img: './Imagenes/Cctv/Disco1TB.jpg'},
    {id: 7, nombre: "Disco 2TB", tipo: "cctv", cantidad: 1, desc: "Disco 2TB de capacidad", precio: 23000, img: './Imagenes/Cctv/Disco2TB.jpg'},
    {id: 13, nombre: "Kit Basico Alarma", tipo: "alarma", cantidad: 1, desc: "Kit compuesto por: Central,teclado,2 sensores de movimiento interior, 1 magnetico y sirena interior", precio: 62000, img: './Imagenes/Alarma/KitAlarma.webp'},
    {id: 8, nombre: "Central de alarma", tipo: "alarma", cantidad: 1, desc: "Central de alarma domiciliaria", precio: 35000, img: './Imagenes/Alarma/CentralAlarma.jpg'},
    {id: 9, nombre: "Teclado", tipo: "alarma", cantidad: 1, desc: "Teclado de activacion", precio: 17000, img: './Imagenes/Alarma/Teclado.webp'},
    {id: 10, nombre: "Sensor interior", tipo: "alarma", cantidad: 1, desc: "Sensor de movimiento interior", precio: 7000, img: './Imagenes/Alarma/PirInterior.jpg'},
    {id: 11, nombre: "Sensor exterior", tipo: "alarma", cantidad: 1, desc: "Sensor de movimiento exterior", precio: 15000, img: './Imagenes/Alarma/PirExterior.jpg'},
    {id: 12, nombre: "Sensor magnetico", tipo: "alarma", cantidad: 1,desc: "Sensor magnetico", precio: 1000, img: './Imagenes/Alarma/Magnetico.webp'},
    {id: 14, nombre: "Sirena interior", tipo: "alarma", cantidad: 1, desc: "Sirena interior", precio: 8000, img: './Imagenes/Alarma/SirenaInterior.jpg'},
    {id: 15, nombre: "Sirena exterior", tipo: "alarma", cantidad: 1, desc: "Sirena exterior", precio: 7000, img: './Imagenes/Alarma/SirenaExterior.jpg'},
    {id: 16, nombre: "Barrera", tipo: "alarma", cantidad: 1, desc: "Barrera exterior hasta 40mts", precio: 13000, img: './Imagenes/Alarma/Barrera.webp'},
];

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('cotizacionTotal');
const cantidadTotal = document.getElementById('cantidadTotal');

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
});

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito();
});

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
 

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    });
});

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId) 
    if (existe){
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito() ;
};

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);

    const indice = carrito.indexOf(item) ;

    carrito.splice(indice, 1);
    actualizarCarrito() ;
    console.log(carrito);
};

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div);
        
        localStorage.setItem('carrito', JSON.stringify(carrito));

    });
  
    contadorCarrito.innerText = carrito.length 
    cotizacionTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
};
