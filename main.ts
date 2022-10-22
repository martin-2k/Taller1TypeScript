import {Serie} from "./serie.js"
import { series } from "./data.js";


let seriesTable: HTMLElement=document.getElementById('series')!;
let avgTemporadasTable: HTMLElement=document.getElementById('avgTemporadas')!;

mostrarSeries(series);
DarPromedioTemporadas(series);


function DarPromedioTemporadas(series:Serie[]):void{
    let avgTemporadas:number=0;
    let trElement:HTMLElement=document.createElement("tr");
    for(let serie of series){
       avgTemporadas+=serie.Seasons;
    }
    avgTemporadas=avgTemporadas/series.length;
    trElement.innerHTML=`<td><b>Seasons average:</b></td><td><b>${avgTemporadas}</b></td>`;
    avgTemporadasTable.appendChild(trElement);
} 

function mostrarSeries(series:Serie[]):void{

    let seriesTBody: HTMLElement=document.createElement('tbody');
    for(let serie of series){
        let trElement:HTMLElement=document.createElement('tr');
        trElement.innerHTML=
        `
        <td>${serie.numero}</td>
        <td>${serie.name}</td>
        <td>${serie.Channel}</td>
        <td>${serie.Seasons}</td>
        `
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}