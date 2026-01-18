const baseDeDatosFolios = {
    "A2024001": { nombre: "BELEN CAROLINA OLIVARES ALVAREZ", carrera: "LICENCIATURA EN PSICOLOGÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD LATINOAMERICANA CAMPUS VALLE" },
    "A2024002": { nombre: "JUAN CARLOS PÉREZ GÓMEZ", carrera: "INGENIERÍA CIVIL", nivel: "LICENCIATURA", institucion: "INSTITUTO TECNOLÓGICO DE MÉXICO" },
    "A2024003": { nombre: "MARÍA FERNANDA RUIZ ESPARZA", carrera: "DERECHO", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD AUTÓNOMA DE MÉXICO" },
    "A2024004": { nombre: "RICARDO ARTURO MEZA LUNA", carrera: "ADMINISTRACIÓN DE EMPRESAS", nivel: "LICENCIATURA", institucion: "ESCUELA BANCARIA Y COMERCIAL" },
    "A2024005": { nombre: "ANA SOFÍA HERNÁNDEZ RIVERA", carrera: "MEDICINA CIRUJANO", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD ANÁHUAC" },
    "A2024006": { nombre: "LUIS GERARDO TORRES SOTO", carrera: "ARQUITECTURA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD IBEROAMERICANA" },
    "A2024007": { nombre: "CARLA PATRICIA MENDEZ VACA", carrera: "CONTADURÍA PÚBLICA", nivel: "LICENCIATURA", institucion: "POLITÉCNICO NACIONAL" },
    "A2024008": { nombre: "SERGIO IVÁN RAMÍREZ DÍAZ", carrera: "CIENCIAS DE LA COMUNICACIÓN", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DEL VALLE DE MÉXICO" },
    "A2024009": { nombre: "DIANA LAURA ORTIZ SILVA", carrera: "PEDAGOGÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD PEDAGÓGICA NACIONAL" },
    "A2024010": { nombre: "FERNANDO JAVIER SOTELO REYES", carrera: "INGENIERÍA INDUSTRIAL", nivel: "LICENCIATURA", institucion: "TECNOLÓGICO DE MONTERREY" },
    "A2024011": { nombre: "MÓNICA BEATRIZ VEGA LARA", carrera: "GASTRONOMÍA", nivel: "LICENCIATURA", institucion: "INSTITUTO CULINARIO DE MÉXICO" },
    "A2024012": { nombre: "ROBERTO CARLOS NAVA CRUZ", carrera: "SISTEMAS COMPUTACIONALES", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE GUADALAJARA" },
    "A2024013": { nombre: "GABRIELA MIRANDA FLORES", carrera: "RELACIONES INTERNACIONALES", nivel: "LICENCIATURA", institucion: "EL COLEGIO DE MÉXICO" },
    "A2024014": { nombre: "HUGO ENRIQUE MORALES PEÑA", carrera: "ECONOMÍA", nivel: "LICENCIATURA", institucion: "ITAM" },
    "A2024015": { nombre: "ELENA MARGARITA RIVAS SOSA", carrera: "BIOLOGÍA MARINA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD AUTÓNOMA DE BAJA CALIFORNIA" },
    "A2024016": { nombre: "OSCAR DANIEL CANO ROSAS", carrera: "INGENIERÍA MECÁNICA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE NUEVO LEÓN" },
    "A2024017": { nombre: "PATRICIA LORENA DELGADO", carrera: "DISEÑO GRÁFICO", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE PALERMO" },
    "A2024018": { nombre: "MAURICIO ABRAHAM VILLA", carrera: "MERCADOTECNIA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD TECNOLÓGICA" },
    "A2024019": { nombre: "SILVIA ESTHER TÉLLEZ", carrera: "ENFERMERÍA", nivel: "LICENCIATURA", institucion: "IMSS ESCUELA DE ENFERMERÍA" },
    "A2024020": { nombre: "ESTEBAN MANUEL OROZCO", carrera: "FILOSOFÍA", nivel: "LICENCIATURA", institucion: "FACULTAD DE FILOSOFÍA Y LETRAS UNAM" },
    "A2024021": { nombre: "BRENDA JAZMÍN GALLARDO", carrera: "INGENIERÍA QUÍMICA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE VERACRUZ" },
    "A2024022": { nombre: "FELIPE DE JESÚS ROMERO", carrera: "ODONTOLOGÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE YUCATÁN" },
    "A2024023": { nombre: "KARLA VANESSA PACHECO", carrera: "NEGOCIOS INTERNACIONALES", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE PUEBLA" },
    "A2024024": { nombre: "ADRIÁN ALFONSO VALENCIA", carrera: "INGENIERÍA MECTRÓNICA", nivel: "LICENCIATURA", institucion: "TECNOLÓGICO DE QUERÉTARO" },
    "A2024025": { nombre: "SANDRA LUZ CABRERA", carrera: "TRABAJO SOCIAL", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE CHIAPAS" },
    "A2024026": { nombre: "MIGUEL ÁNGEL SALAZAR", carrera: "SOCIOLOGÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE MORELOS" },
    "A2024027": { nombre: "ERIKA MARCELA ESCAMILLA", carrera: "TURISMO", nivel: "LICENCIATURA", institucion: "IPN EST" },
    "A2024028": { nombre: "CLAUDIA IVETTE GUZMÁN", carrera: "HISTORIA DEL ARTE", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE MORELIA" },
    "A2024029": { nombre: "GUSTAVO ADOLFO MEDINA", carrera: "INGENIERÍA EN ENERGÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE TABASCO" },
    "A2024030": { nombre: "IRENE BEATRIZ CALDERÓN", carrera: "LITERATURA HISPÁNICA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE SONORA" },
    "A2024031": { nombre: "VALENTINA CAMPOS RUIZ", carrera: "ARTES VISUALES", nivel: "LICENCIATURA", institucion: "ENAP" },
    "A2024032": { nombre: "CÉSAR AUGUSTO ARROYO", carrera: "FÍSICA", nivel: "LICENCIATURA", institucion: "CENTRO DE INVESTIGACIÓN AVANZADA" },
    "A2024033": { nombre: "NATALIA JIMENA GÓMEZ", carrera: "MATEMÁTICAS APLICADAS", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE GUANAJUATO" },
    "A2024034": { nombre: "ISAAC QUINTERO FLORES", carrera: "INGENIERÍA AERONÁUTICA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE CHIHUAHUA" },
    "A2024035": { nombre: "REBECA SALGADO MONTES", carrera: "PERIODISMO", nivel: "LICENCIATURA", institucion: "ESCUELA DE PERIODISMO CARLOS SEPTIÉN" },
    "A2024036": { nombre: "PABLO HERRERA BELTRÁN", carrera: "NUTRICIÓN HUMANA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE HIDALGO" },
    "A2024037": { nombre: "XIMENA TOVAR ROJAS", carrera: "PSICOLOGÍA EDUCATIVA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE TLAXCALA" },
    "A2024038": { nombre: "EMILIO ROJAS ESPINOSA", carrera: "INGENIERÍA ELÉCTRICA", nivel: "LICENCIATURA", institucion: "TECNOLÓGICO DE SAN LUIS" },
    "A2024039": { nombre: "SOFÍA LORENA CASTRO", carrera: "DERECHO FISCAL", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE CAMPECHE" },
    "A2024040": { nombre: "ALFONSO RUIZ VILLA", carrera: "AGRONOMÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD CHAPINGO" },
    "A2024041": { nombre: "MARISOL NÚÑEZ LARA", carrera: "VETERINARIA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE ZACATECAS" },
    "A2024042": { nombre: "MANUEL BARRIOS SOTO", carrera: "INGENIERÍA PETROLERA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE TAMAULIPAS" },
    "A2024043": { nombre: "YOLANDA MONTES CANO", carrera: "ANTROPOLOGÍA", nivel: "LICENCIATURA", institucion: "ENAH" },
    "A2024044": { nombre: "ANDRÉS BELTRÁN REYES", carrera: "GEOLOGÍA", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE COAHUILA" },
    "A2024045": { nombre: "LORENA ACEVEDO VACA", carrera: "CULTURA FÍSICA", nivel: "LICENCIATURA", institucion: "ESCUELA NACIONAL DE ENTRENADORES" },
    "A2024046": { nombre: "JAVIER AGUIRRE PARRA", carrera: "INGENIERÍA AMBIENTAL", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE COLIMA" },
    "A2024047": { nombre: "VERÓNICA PARRA MEZA", carrera: "LENGUAS EXTRANJERAS", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE QUERÉTARO" },
    "A2024048": { nombre: "DANIEL MIRANDA SOSA", carrera: "TEOLOGÍA", nivel: "LICENCIATURA", institucion: "PONTIFICIA DE MÉXICO" },
    "A2024049": { nombre: "ARTURO VILLA DELGADO", carrera: "MÚSICA", nivel: "LICENCIATURA", institucion: "CONSERVATORIO NACIONAL" },
    "A2024050": { nombre: "CÉSAR ARROYO CAMPOS", carrera: "TECNOLOGÍA DE LA INFORMACIÓN", nivel: "LICENCIATURA", institucion: "UNIVERSIDAD DE AGUASCALIENTES" }
};

// Función de búsqueda actualizada con la lógica de la DGAIR y diseño de tarjeta
function ejecutarBusqueda(event) {
    event.preventDefault();
    const folioInput = document.getElementById("folioSEP").value.trim();
    const busqueda = document.getElementById("seccion-busqueda");
    const resultado = document.getElementById("seccion-resultado");
    const error = document.getElementById("mensaje-error");
    const leyendaDgair = document.getElementById("leyenda-dgair");

    if (baseDeDatosFolios[folioInput]) {
        const data = baseDeDatosFolios[folioInput];
        
        // Inyectar datos en la tarjeta
        document.getElementById("res-nombre").innerText = data.nombre;
        document.getElementById("res-carrera").innerText = data.carrera;
        document.getElementById("res-nivel").innerText = data.nivel;
        document.getElementById("res-folio").innerText = folioInput;
        document.getElementById("res-institucion").innerText = data.institucion;

        // Mostrar elementos de consulta
        leyendaDgair.style.display = "block";
        busqueda.style.display = "none";
        resultado.style.display = "block";
        error.style.display = "none";
    } else {
        error.style.display = "block";
        leyendaDgair.style.display = "none";
    }
    return false;
}
