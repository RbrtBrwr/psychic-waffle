const lista1 = [
    100,
    200,
    500,
    40000000,
    10,
    243,
    234,
    34,
    2,
    67
];



function esPar(numero){
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
   
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(list){
    list.sort(function (el1, el2){
        return el1 - el2;
    });

    const mitadLista = parseInt(list.length / 2);
    
    let mediana;
    
    if (esPar(list.length)){
        const elemento1 = list[mitadLista - 1];
        const elemento2 = list[mitadLista];
        
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    
    } else {
        mediana = list[mitadLista];
    }

    return mediana;
}
