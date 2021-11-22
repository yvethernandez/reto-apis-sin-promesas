let alumnos = [];
let asignaturas = [];
let notas = [];

function getDatosAlumnos(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        setDataAlumnos(data);
    };
    xhr.send();
}

function getDatosAsignaturas(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        setDataAsignaturas(data);
    };
    xhr.send();
}


function getDatosNotas(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        setDataNotas(data);
    };
    xhr.send();
}

function setDataAlumnos(datos){
    alumnos.push(datos);
    alumnosTodos(alumnos);
}

function setDataAsignaturas(datos){
    asignaturas.push(datos);
    asignaturasTodos(asignaturas);
}

function setDataNotas(datos){
    notas.push(datos);
    notasTodos(notas);
}

function alumnosTodos(alumnosDatos){
    for (let index = 0; index < alumnosDatos.length; index++) {
        const uno = alumnosDatos[index];
        document.getElementById("tablaAlumnos").innerHTML = "";
        for(let dos = 0; dos < uno.length; dos++){
            let html = "";
            const element = uno[dos];
        html += "<tr>";
        html += "   <td scope='row'>" + element.Alumno + "</td>";
        html += "   <td>" + element.nombre + "</td>";
        html += "   <td>" + element.Apellido + "</td>";
        html += "   <td>" + element.Correo + "</td>";
        html += "   <td>" + element.contraseña + "</td>";
        html += "   <td><img src='" + element.imagen + "' /></td>";
        html += "</tr>";
        let tabla = document.getElementById("tablaAlumnos");
        tabla.insertAdjacentHTML('beforeend', html);

    }
  } 
}

function asignaturasTodos(asignaturaDatos){
    for (let index = 0; index < asignaturaDatos.length; index++) {
        const uno = asignaturaDatos[index];
        document.getElementById("tablaAsignaturas").innerHTML = "";
        for(let dos = 0; dos < uno.length; dos++){
            let html = "";
            const element = uno[dos];
        html += "<tr>";
        html += "   <td scope='row'>" + element.Asignatura + "</td>";
        html += "   <td><img src='" + element.imagen + "' /></td>";
        html += "</tr>";
        let tabla = document.getElementById("tablaAsignaturas");
        tabla.insertAdjacentHTML('beforeend', html);

    }
  } 
}

function notasTodos(notasDatos){
    for (let index = 0; index < notasDatos.length; index++) {
        const uno = notasDatos[index];
        document.getElementById("tablaNotas").innerHTML = "";
        for(let dos = 0; dos < uno.length; dos++){
            let html = "";
            const element = uno[dos];
        html += "<tr>";
        html += "   <td scope='row'>" + element.asignatura + "</td>";
        html += "   <td scope='row'>" + element.alumno + "</td>";
        html += "   <td scope='row'>" + element.nota + "</td>";
        
        html += "</tr>";
        let tabla = document.getElementById("tablaNotas");
        tabla.insertAdjacentHTML('beforeend', html);

    }
  } 
}


function deLosAlumnos(){
 getDatosAlumnos("https://618a089b34b4f400177c4393.mockapi.io/GetLista");   
}

function deLasAsignaturas(){
    getDatosAsignaturas("https://618a089b34b4f400177c4393.mockapi.io/Asignaturas");   
   }

   function deLasNotas(){
    getDatosNotas("https://618a089b34b4f400177c4393.mockapi.io/Notas");   
   }