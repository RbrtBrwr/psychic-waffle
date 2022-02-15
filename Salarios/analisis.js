// Utils
function esPar(x){
    return (x % 2 === 0);
}

function calcularMediaAritmetica(list){
    const sumaLista = list.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / list.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(list){
    const mitad = parseInt(list.length / 2);

    if (esPar(list.length)){
        const personaMitadA = list[mitad - 1];
        const personaMitadB = list[mitad];

        const mediana = calcularMediaAritmetica([personaMitadA, personaMitadB]);
        return mediana;
    } else {
        const personaMitad = list[mitad];
        return personaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const sortedSalariosCol = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
);

const medianaGeneralCol = medianaSalarios(sortedSalariosCol);

// Mediana top 10%
const spliceStart = (sortedSalariosCol.length * 90) / 100;
const spliceCount = sortedSalariosCol.length - spliceStart;

const salariosColTop10 = sortedSalariosCol.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log(
    medianaGeneralCol, 
    medianaTop10Col,
);