function calculaDistancia (metros){
    console.log( metros<=1000 ? "pie" 
    :metros>1000 && metros<=10000 ? "bicicleta"
    :metros>10000 && metros<=30000 ? "colectivo"
    :metros>30000 && metros<=100000 ? "auto"
    :"avion")
}

function mayor (numeros){
    console.log( Math.max(...numeros))
}