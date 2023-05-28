// Datos falsos almacenados en un array
var datosFalsos = [
  { dni: "12345678", nombre: "Kenyi Hancco", edad: 27 },
  { dni: "98765432", nombre: "Robinson Ballon", edad: 24 },
  { dni: "56789012", nombre: "Luis González", edad: 40 },
  { dni: "34567890", nombre: "Ana Rodríguez", edad: 35 },
  { dni: "87654321", nombre: "Carlos López", edad: 28 },
];

function buscarUsuario() {
  var dni = document.getElementById("dni").value;
  var usuarioEncontrado = false;
  var resultadoDiv = document.getElementById("result");

  // Buscar el usuario en los datos falsos
  for (var i = 0; i < datosFalsos.length; i++) {
    if (datosFalsos[i].dni === dni) {
      resultadoDiv.innerHTML =
        "<h3>Nombres y Apellidos: </h3>" + datosFalsos[i].nombre + "<h3>Edad: </h3>" + datosFalsos[i].edad;
      usuarioEncontrado = true;
      break;
    }
  }

  // Mostrar mensaje si no se encuentra el usuario
  if (!usuarioEncontrado) {
    resultadoDiv.innerHTML =
      "<p class='error-message'>Usuario no encontrado</p>";
  }
}
