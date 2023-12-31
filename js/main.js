const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("vercarrito");
const cardCarritoContainer = document.getElementById("card-carrito-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("./data.json")
.then((response) => response.json())
.then((data) =>{
    productos.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <img src= "${product.img}"
        <h3>${product.nombre}</3>
        <p class ="price">${product.precio} $</p>
        `;
    
        shopContent.append(content);
    
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";
    
        content.append(comprar);
    
        comprar.addEventListener("click", () =>{
            carrito.push({
                id : product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio
            });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se agrego al carrito',
                showConfirmButton: false,
                timer: 1500
              })
            contadorCarrito();
            saveLocal();
        });
    });
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

