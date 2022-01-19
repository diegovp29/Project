window.onload = function () {
    window.setInterval(muestraReloj, 1000);
}
function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var sufijo = ' am';
    if (horas >= 12) {
        if (horas > 12)
            horas = horas - 12;
        sufijo = ' pm';
    }
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }
    document.getElementById("reloj").firstChild.nodeValue = horas + ':' + minutos + ':' + segundos + sufijo;
}
