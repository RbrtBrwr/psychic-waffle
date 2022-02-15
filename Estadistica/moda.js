const lista1 = [
    1,
    2,
    2,
    3,
    1,
    1,
    5,
    1,
    6,
    5
];

// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if (lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function (elA, elB){
//         return elA[1] - elB[1];
//     }
// );

// const moda = lista1Array[lista1Array.length -1];

function calcularModa(list){
    const countList = {};

    list.map(
        function (x) {
            if (countList[x]){
                countList[x] += 1;
            } else {
                countList[x] = 1;
            }
        }
    )

    const listArray = Object.entries(countList).sort(
        function (x, y) {
            return x[1] - y[1];
        }
    )

    const moda = listArray[listArray.length -1];
    return Number(moda[0]);
}