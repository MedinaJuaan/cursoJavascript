const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const procesarCompra = document.querySelector("#procesarCompra");


// Traer datos de JSON y crear las tarjetas de productos

fetch("./data/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((prod) => {
      const { id, nombre, desc, img, cantidad } = prod;
      if (contenedor) {
        contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Cotizar Producto</button>
    </div>
  </div>
    `;
      }
    });
  });


// Crear objetos desde el JSON para poder usarlos despues

fetch("./data/data.json")
  .then((res) => res.json())
  .then((productos) => {
    data = productos;
  });


  // Establecer array vacia para agregar los productos al carrito

  let data = [];

const agregarProducto = (id) => {
  const existe = carrito.some((prod) => prod.id === id);

  if (existe) {
    const prod = carrito.map((prod) => {
      if (prod.id === id) {
        prod.cantidad++;
      }
    });
  } else {
    const item = data.find((prod) => prod.id === id);
    carrito.push(item);
  }
  mensaje();

  mostrarCarrito();
};


// Mostrar productos agregados en el carrito de compras desplegable

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  modalBody.innerHTML = "";
  carrito.forEach((prod) => {
    const { id, nombre, desc, img, cantidad } = prod;
    console.log(modalBody);
    modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
  });

  if (carrito.length === 0) {
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  }
  carritoContenedor.textContent = carrito.length;

  guardarStorage();
};



// Comprar!

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Agrega productos para continuar con la cotizacion",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      const total = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
        );
        Swal.fire({
          title: "Gracias por elegirnos",
          text: `Tu cotizacion total es de $${total}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      }
      setTimeout(() => {
        localStorage.removeItem("carrito");
        location.reload();
      }, 5000);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
  });
  
  // Vaciar carrito

if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

  // Guardar en storage

  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Eliminar productos

function eliminarProducto(id) {
  const productoId = id;
  carrito = carrito.filter((producto) => producto.id !== productoId);
  mostrarCarrito();
}

// Mensaje al agregar productos que se sale solo

function mensaje() {
  document.querySelector(".mensaje").style.display = "block";

  setTimeout(function() {
    document.querySelector(".mensaje").style.display = "none";
  }, 500);
}
