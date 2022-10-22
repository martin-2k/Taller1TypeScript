import { series } from "./data.js";
/* let cursos=
[
    new Curso("Practicas esenciales",20,90,true,2019),
    new Curso("ingesoft para la web",19,99,true,2018),
    new Curso("Pruebas auto",25,50,false,2020),
    new Curso("Principios de disenio y arquitectura",30,75,true,2020)
]

export const ap = new Aprendiz('Juan Pablo','Reyes Gomez','avatar.png',30,NivelEducativo.POSTGRADO,cursos)
 */
var seriesTable = document.getElementById('series');
var avgTemporadasTable = document.getElementById('avgTemporadas');
/* let aprendizTable: HTMLElement=document.getElementById('aprendiz')!;
let estadisticasTable: HTMLElement=document.getElementById('estadisticas')!;
let cursosTable:HTMLElement=document.getElementById('cursos')!;

console.log(ap.cursos);

mostrarDatosAprendiz(ap);
mostarEstadisticas(ap); */
mostrarSeries(series);
DarPromedioTemporadas(series);
/* function mostrarDatosAprendiz(aprendiz:Aprendiz):void{
    let tbodyAprendiz=document.createElement('tbody');
    tbodyAprendiz.innerHTML=
    `
    <tr><td colspan=2><img src="./${aprendiz.avatar}" height="100" > </td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>
    `
    aprendizTable.appendChild(tbodyAprendiz);
}
*/
function DarPromedioTemporadas(series) {
    var avgTemporadas = 0;
    var trElement = document.createElement("tr");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        avgTemporadas += serie.Seasons;
    }
    avgTemporadas = avgTemporadas / series.length;
    trElement.innerHTML = "<td><b>Seasons average:</b></td><td><b>".concat(avgTemporadas, "</b></td>");
    avgTemporadasTable.appendChild(trElement);
}
function mostrarSeries(series) {
    var seriesTBody = document.createElement('tbody');
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var trElement = document.createElement('tr');
        trElement.innerHTML =
            "\n        <td>".concat(serie.numero, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.Channel, "</td>\n        <td>").concat(serie.Seasons, "</td>\n        ");
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}
