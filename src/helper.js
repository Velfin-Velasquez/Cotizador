//obtiene diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function calcularMarca(marca) {
  let incremeto;

  switch (marca) {
    case "americano":
      incremeto = 1.15;
      break;
    case "europeo":
      incremeto = 1.3;
      break;

    case "asiatico":
      incremeto = 1.05;
      break;

    default:
      break;
  }
  return incremeto;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//mustra primer letra en mayuscula
export function primerLetraMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
