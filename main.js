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

  // Simular disponibilidad de fechas y horas (esto puede ser más complejo en una aplicación real)
const disponibilidad = [
  { fecha: '2023-10-10', hora: '10:00 AM' },
  { fecha: '2023-10-11', hora: '2:00 PM' },
  { fecha: '2023-10-12', hora: '4:00 PM' },
];

// Función para mostrar la disponibilidad en la página
function mostrarDisponibilidad() {
  const disponibilidadDiv = document.getElementById('disponibilidad');
  disponibilidadDiv.innerHTML = '';

  disponibilidad.forEach(turno => {
      const turnoDiv = document.createElement('div');
      turnoDiv.textContent = `Fecha: ${turno.fecha}, Hora: ${turno.hora}`;
      disponibilidadDiv.appendChild(turnoDiv);
  });
}

// Evento al hacer clic en el botón "Solicitar Turno"
const solicitarTurnoButton = document.getElementById('solicitarTurno');
solicitarTurnoButton.addEventListener('click', () => {
  if (disponibilidad.length > 0) {
      // En una aplicación real, podrías implementar lógica para manejar la solicitud de turno.
      // Aquí, simplemente eliminamos el primer turno disponible como ejemplo.
      disponibilidad.shift();
      mostrarDisponibilidad();
      alert('Turno solicitado con éxito.');
  } else {
      alert('No hay turnos disponibles en este momento.');
  }
});

// Mostrar la disponibilidad inicial al cargar la página
mostrarDisponibilidad();
