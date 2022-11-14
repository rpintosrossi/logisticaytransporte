var body=document.getElementById("color");
var fondo = "#ffffff";
var red = "#ff0000";
var yellow = "#ffff00";
var black = "#000000";

function changeColor(color){
    body.style.backgroundColor = color == 'red' ? red 
        : color == 'yellow' ? yellow
        : color == 'black' ? black
        : fondo;
};

//Punto 2.
function myTextarea(){
    let text = document.getElementById("myTextarea").value

    document.getElementById('contador').innerHTML = text.length;
}

//Punto 3.
function alumnosAprobados(){
    return alumnos.filter(alumno => alumno.nota >= 7 );
}