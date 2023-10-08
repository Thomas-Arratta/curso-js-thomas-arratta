function numeroPrimo(numero) {
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
  }