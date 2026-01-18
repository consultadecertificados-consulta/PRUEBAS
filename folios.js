const baseDeDatosFolios = {
    "A2024001": { 
        nombre: "BELEN CAROLINA OLIVARES ALVAREZ", 
        carrera: "LICENCIATURA EN PSICOLOGÍA", 
        nivel: "LICENCIATURA", 
        institucion: "UNIVERSIDAD LATINOAMERICANA CAMPUS VALLE" 
    },
    "A2024002": { 
        nombre: "JUAN PÉREZ LÓPEZ", 
        carrera: "INGENIERÍA CIVIL", 
        nivel: "LICENCIATURA", 
        institucion: "INSTITUTO TECNOLÓGICO DE MÉXICO" 
    }
    // Puedes seguir agregando hasta los 50 aquí siguiendo el mismo formato
};

function ejecutarBusqueda(event) {
    event.preventDefault();
    const folio = document.getElementById("folioSEP").value.trim();
    const busqueda = document.getElementById("seccion-busqueda");
    const resultado = document.getElementById("seccion-resultado");
    const error = document.getElementById("mensaje-error");

    if (baseDeDatosFolios[folio]) {
        // Asignar valores a la tarjeta
        document.getElementById("res-nombre").innerText = baseDeDatosFolios[folio].nombre;
        document.getElementById("res-carrera").innerText = baseDeDatosFolios[folio].carrera;
        document.getElementById("res-nivel").innerText = baseDeDatosFolios[folio].nivel;
        document.getElementById("res-folio").innerText = folio;
        document.getElementById("res-institucion").innerText = baseDeDatosFolios[folio].institucion;

        // Cambiar vista
        busqueda.style.display = "none";
        resultado.style.display = "block";
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
    return false;
}
