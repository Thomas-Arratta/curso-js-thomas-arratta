/*function numeroPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const n = Number(prompt("Ingrese un numero para comprobar si ese numero elegido es primo"));
  if (numeroPrimo(n)) {
    alert(n + " es un número primo.");
  } 
  else {
    alert(n + " no es un número primo.");
  }*/



  /*class SimuladorTurnosMedicos {
    constructor() {
        this.medicos = [
            { nombre: 'Dr. García', especialidad: 'Cardiología', horarios: ['10:00 AM', '2:00 PM'] },
            { nombre: 'Dra. López', especialidad: 'Pediatría', horarios: ['9:00 AM', '1:00 PM'] },
            // Agrega más médicos y horarios aquí
        ];

        this.turnos = [];
    }

    mostrarDisponibilidad() {
        const disponibilidadDiv = document.getElementById('disponibilidad');
        disponibilidadDiv.innerHTML = '';

        this.medicos.forEach(medico => {
            const medicoDiv = document.createElement('div');
            medicoDiv.textContent = `Médico: ${medico.nombre}, Especialidad: ${medico.especialidad}`;

            const selectHora = document.createElement('select');
            medico.horarios.forEach(hora => {
                const option = document.createElement('option');
                option.value = hora;
                option.textContent = hora;
                selectHora.appendChild(option);
            });

            medicoDiv.appendChild(selectHora);
            disponibilidadDiv.appendChild(medicoDiv);
        });
    }

    solicitarTurno() {
        const selectHoras = document.querySelectorAll('select');
        selectHoras.forEach((selectHora, index) => {
            const horaSeleccionada = selectHora.value;
            if (horaSeleccionada) {
                this.turnos.push({ medico: this.medicos[index].nombre, hora: horaSeleccionada });
            }
        });
    }
}

const simulador = new SimuladorTurnosMedicos();

// Mostrar disponibilidad inicial al cargar la página
simulador.mostrarDisponibilidad();

// Evento al hacer clic en el botón "Solicitar Turno"
const solicitarTurnoButton = document.getElementById('solicitarTurno');
solicitarTurnoButton.addEventListener('click', () => {
    simulador.solicitarTurno();
    alert('Turno(s) solicitado(s) con éxito.');
});

// Ejemplo de notificación (esto requeriría implementación más avanzada)
function notificarTurnoSolicitado(turno) {
    console.log(`Notificación: Turno con el ${turno.medico} a las ${turno.hora} solicitado.`);
}*/


const productos = [
  {nombre: "Pan", precio: 400},
  {nombre: "Factura", precio: 100},
  {nombre: "torta", precio: 3000},
  {nombre: "tarta de manzana", precio: 1800},
  {nombre: "tarta de ricota", precio: 1600},
  {nombre: "sandwich de miga", precio: 150},
];
let carrito = [];

let seleccion = prompt("hola quiere comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
  alert("por favor ingrese si o no")
  seleccion = prompt("hola quiere comprar algo si o no")
};

if(seleccion == "si"){
  alert("nuesta lista de producto es:");
  let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
  alert(todosLosProductos.join(" - "));
}else if (seleccion == "no"){
  alert("gracias por venir");
};

while(seleccion != "no"){
  let producto = prompt("agrega un producto al carrito")
  let precio = 0

  if(producto == "pan" || producto == "factura" || producto == "torta" || producto == "tarta de manzana" || producto == "tarta de ricota" || producto == "sandwich de miga"){
    switch(producto) {
      case "pan":
        precio = 400;
        break;
      case "factura":
        precio = 100;
        break;
      case "torta":
        precio = 3000;
        break;
      case "tarta de manzana":
        precio = 1800;
        break;
      case "tarta de ricota":
        precio = 1600;
        break;
      case "sandwich de miga":
        precio = 150;
        break;
      default:
        break;
    }
  let unidades =Number(prompt("cuantas unidades va a llevar?"))
  carrito.push({producto, unidades, precio})  
  }else{
    alert("no tenemos ese producto")
  }

  seleccion = prompt("desea seguir comprando?")

  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

  while(seleccion === "no"){
    alert("sus productos elegidos son:")
    carrito.forEach((carritoFinal) => {
      alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}`)
    })
    alert(`el total a pagar por su compra es: ${total}$`)
    alert("gracias por la compra")
    break;
  }
};
